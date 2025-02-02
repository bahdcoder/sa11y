import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'a11y_checks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.string('name').notNullable()

      table.string('file_key').unique().notNullable()

      table.timestamp('completed_at').nullable()
      table.timestamp('failed_at').nullable()
      table.text('failure_reason').nullable()

      table.string('runner')
      table.string('reporter')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
