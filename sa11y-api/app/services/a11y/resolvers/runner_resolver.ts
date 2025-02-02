import UnknownRunnerException from '#exceptions/a11y/unknown_runner_exception'
import { A11yRunnerContract } from '#services/a11y/contracts/a11y_runner_contract'
import { A11yRunnerResolverContract } from '#services/a11y/contracts/a11y_runner_resolver_contract'

export class RunnerResolver implements A11yRunnerResolverContract {
  protected runners: Map<string, A11yRunnerContract> = new Map()

  public register(name: string, runner: A11yRunnerContract) {
    this.runners.set(name, runner)
  }

  public resolve(name: string) {
    const runner = this.runners.get(name)

    if (!runner) {
      throw new UnknownRunnerException(
        `Runner ${name} is not supported or has not been registered.`
      )
    }

    return runner
  }
}
