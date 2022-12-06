import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Semestres extends BaseSchema {
  protected tableName = 'semestres'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('nome', 30).notNullable();
      table.date('data_inicio').notNullable();
      table.date('data_fim').notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
