import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import { type HasMany } from '@adonisjs/lucid/types/relations'
import A11yResult from '#models/a11y_result'
import { randomUUID } from 'node:crypto'

export default class A11YCheck extends BaseModel {
  static table = 'a11y_checks'
  static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column()
  declare fileKey: string

  @column()
  declare enhanceWithAi: boolean

  @column()
  declare name: string

  @column()
  declare runner: string

  @column()
  declare reporter: string

  @column()
  declare failureReason: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare completedAt: DateTime

  @column.dateTime()
  declare failedAt: DateTime

  @hasMany(() => A11yResult, {
    foreignKey: 'a11yCheckId',
  })
  declare results: HasMany<typeof A11yResult>

  async complete() {
    this.completedAt = DateTime.now()

    await this.save()
  }

  async fail(reason?: string) {
    this.failedAt = DateTime.now()

    if (reason) {
      this.failureReason = reason
    }

    await this.save()
  }

  @beforeCreate()
  static assignUuid(a11yCheck: A11YCheck) {
    if (!a11yCheck.id) {
      a11yCheck.id = randomUUID()
    }
  }
}
