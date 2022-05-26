import { LoadAccountByToken } from '../../domain/usecases'
import { AccessDeniedError } from '../errors'
import { forbidden, success } from '../helpers/http/http-helper'
import { HttpRequest, HttpResponse } from '../protocols'

export class AuthMiddleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']

    if (accessToken) {
      const account = await this.loadAccountByToken.load(accessToken)

      return success({
        accountId: account.id
      })
    }

    return forbidden(new AccessDeniedError())
  }
}