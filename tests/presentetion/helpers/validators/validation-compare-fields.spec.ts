import { InvalidParamError } from '../../../../src/presentetion/errors'
import { ValidationCompareField } from '../../../../src/presentetion/helpers/validators/validation-compare-fields'

const makeSut = (): ValidationCompareField => {
  return new ValidationCompareField('field', 'fieldToCompare')
}

describe('Validation Compare Fields', () => {
  test('should return MissingParamError if validation fails', () => {
    const sut = makeSut()

    const validateError = sut.validate({ field: 'any_value', fieldToCompare: 'wrong_value' })

    expect(validateError).toEqual(new InvalidParamError('field'))
  })

  test('should Validation execute with success', () => {
    const sut = makeSut()

    const validateError = sut.validate({ field: 'any_value', fieldToCompare: 'any_value' })

    expect(validateError).toBeFalsy()
  })
})
