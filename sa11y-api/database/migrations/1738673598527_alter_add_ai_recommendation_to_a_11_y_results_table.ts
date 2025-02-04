import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'a11y_results'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('ai_recommendation').nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('ai_recommendation')
    })
  }
}
