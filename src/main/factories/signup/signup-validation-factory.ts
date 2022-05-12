import { Validation } from '../../../presentetion/controller/protocols/validation'
import { ValidationCompareField, ValidationComposite, ValidationEmail, ValidationRequiredField } from '../../../presentetion/helpers/validators'
import { EmailValidatorAdapter } from '../../adapters/validators/email-validator-adapter'

export const makeSignupValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new ValidationRequiredField(field))
  }
  validations.push(new ValidationCompareField('password', 'passwordConfirmation'))
  validations.push(new ValidationEmail('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}