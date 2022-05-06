import { EmailValidator } from '../../controller/protocols/email-validator'
import { InvalidParamError } from '../../errors'
import { Validation } from './validation'

export class ValidationEmail implements Validation {
  private readonly field: string
  private readonly emailValidator: EmailValidator

  constructor (field: string, emailValidator: EmailValidator) {
    this.field = field
    this.emailValidator = emailValidator
  }

  validate (value: any): Error {
    const emailIsValid = this.emailValidator.isValid(value[this.field])

    if (!emailIsValid) {
      return new InvalidParamError(this.field)
    }
  }
}