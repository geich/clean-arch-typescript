import { AddSurvey, AddSurveyModel } from '@/domain/usecases'
import { AddSurveyRepository } from '@/data/protocols'

export class DbAddSurvey implements AddSurvey {
  constructor (
    private readonly addSurveyRepository: AddSurveyRepository
  ) {}

  async add (survey: AddSurveyModel): Promise<void> {
    await this.addSurveyRepository.add(survey)
  }
}