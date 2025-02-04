import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { A11yReportContract } from '#services/a11y/contracts/a11y_report_contract'

export default class A11yResult extends BaseModel {
  static table = 'a11y_results'

  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'a11y_check_id' })
  declare a11yCheckId: string

  @column()
  declare type: A11yReportContract['type']

  @column()
  declare message: string

  @column()
  declare aiRecommendation: string

  @column()
  declare element: string

  @column()
  declare code: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
