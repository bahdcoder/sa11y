import { A11yRunnerContract } from '#services/a11y/contracts/a11y_runner_contract'

export interface A11yRunnerResolverContract {
  register(name: string, runner: A11yRunnerContract): void
  resolve(name: string): A11yRunnerContract
}
