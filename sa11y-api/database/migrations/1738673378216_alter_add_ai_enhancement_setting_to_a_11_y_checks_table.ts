import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'a11y_checks'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('enhance_with_ai').defaultTo(false).nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('enhance_with_ai')
    })
  }
}
