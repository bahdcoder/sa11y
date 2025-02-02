import { A11yScoreCalculatorService } from '#services/a11y/a11y_score_calculator_service'
import { A11yService } from '#services/a11y/a11y_service'
import { A11yRunnerResolverContract } from '#services/a11y/contracts/a11y_runner_resolver_contract'
import { RunnerResolver } from '#services/a11y/resolvers/runner_resolver'
import { HTMLCodeSnifferRunner } from '#services/a11y/runners/html_code_sniffer_runner'
import type { ApplicationService } from '@adonisjs/core/types'

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    'a11y.runner-resolver': A11yRunnerResolverContract
    'a11y.service': A11yService
    'a11y.score.service': A11yScoreCalculatorService
  }
}

export default class A11yServiceProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    this.app.container.singleton('a11y.runner-resolver', () => {
      const resolver = new RunnerResolver()

      resolver.register('html-code-sniffer', new HTMLCodeSnifferRunner())
      // register ai runner, axe runner, or any runners in future

      return resolver
    })

    this.app.container.bind('a11y.score.service', () => {
      return new A11yScoreCalculatorService()
    })

    this.app.container.bind('a11y.service', () => {
      return new A11yService()
    })
  }

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
