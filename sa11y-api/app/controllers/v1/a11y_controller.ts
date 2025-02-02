import ProcessAllyCheckJob from '#jobs/process_a11y_check_job'
import A11YCheck from '#models/a11y_check'
import { A11yScoreCalculatorService } from '#services/a11y/a11y_score_calculator_service'
import { CreateA11yCheckValidator } from '#validators/create_a11y_check'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

import queue from '@rlanz/bull-queue/services/main'

import { randomUUID } from 'node:crypto'

@inject()
export default class A11yController {
  constructor(protected a11yScoreCalculatorService: A11yScoreCalculatorService) {}

  async index({ response }: HttpContext) {
    // TODO: MAKE PAGINATION DYNAMIC
    const a11yChecks = await A11YCheck.query().paginate(1, 50)

    return response.ok(a11yChecks)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const {
      html,
      name,
      reporter = 'json',
      runner = 'html-code-sniffer',
    } = await request.validateUsing(CreateA11yCheckValidator)

    const a11yCheckId = randomUUID()

    const htmlfileKey = `a11y-checks/${a11yCheckId}.${html.extname}`

    await html.moveToDisk(htmlfileKey, {
      contentType: 'text/html',
    })

    const a11yCheck = await A11YCheck.create({
      id: a11yCheckId,
      fileKey: htmlfileKey,
      runner,
      name,
      reporter,
    })

    await queue.dispatch(ProcessAllyCheckJob, {
      a11yCheckId: a11yCheck.id,
    })

    return response.created({
      message: `We have received your file.`,
      description: 'The accessibility checks will begin running in the background.',
      data: {
        name: a11yCheck.name,
        a11yCheckId: a11yCheck.id,
        transmitKey: `a11y-checks/${a11yCheck.id}`,
      },
    })
  }

  async show({ request, response }: HttpContext) {
    // TODO: Paginate results
    const a11yCheck = await A11YCheck.query()
      .where('id', request.param('id'))
      .preload('results')
      .firstOrFail()

    const score = await this.a11yScoreCalculatorService.run(a11yCheck)

    return response.ok({ ...a11yCheck.toJSON(), score })
  }
}
