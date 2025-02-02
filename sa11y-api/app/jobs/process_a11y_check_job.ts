import A11YCheck from '#models/a11y_check'
import { A11yService } from '#services/a11y/a11y_service'
import { inject } from '@adonisjs/core'
import app from '@adonisjs/core/services/app'
import transmit from '@adonisjs/transmit/services/main'
import { Job } from '@rlanz/bull-queue'

interface ProcessA11yCheckJobPayload {
  a11yCheckId: string
}

@inject()
export default class ProcessA11yCheckJob extends Job {
  // This is the path to the file that is used to create the job
  static get $$filepath() {
    return import.meta.url
  }

  constructor(protected a11yService: A11yService) {
    super()
  }

  /**
   * Base Entry point
   */
  async handle(payload: ProcessA11yCheckJobPayload) {
    const a11yCheck = await A11YCheck.find(payload.a11yCheckId)

    if (!a11yCheck) {
      return
    }

    const a11yService = await app.container.make('a11y.service')

    await a11yService.run(a11yCheck)

    const updatedA11yCheck = await a11yCheck.refresh()

    transmit.broadcast(`a11y-checks/${a11yCheck.id}`, {
      a11yCheck: updatedA11yCheck.toJSON(),
    })
  }

  async rescue(payload: ProcessA11yCheckJobPayload, error: Error) {
    console.error(error)
    const a11yCheck = await A11YCheck.find(payload.a11yCheckId)

    if (!a11yCheck) {
      return
    }

    // POTENTIAL DATA LEAK. TODO: Manually filter client safe messages before storing.
    await a11yCheck.fail(error?.message)

    const updatedA11yCheck = await a11yCheck.refresh()

    transmit.broadcast(`a11y-checks/${a11yCheck.id}`, { a11yCheck: updatedA11yCheck.toJSON() })
  }
}
