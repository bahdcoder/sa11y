import { Exception } from '@adonisjs/core/exceptions'

export default class UnknownRunnerException extends Exception {
  static status = 500
  static code = 'E_UNKNOWN_A11Y_RUNNER'
}
