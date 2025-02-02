import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'a11y_results'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.enum('type', ['error', 'warning', 'notice', 'unknown']).notNullable()
      table.string('code')
      table.text('message')
      table.text('element')

      // TODO: Add foreign key constraint against checks table.
      table.string('a11y_check_id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
