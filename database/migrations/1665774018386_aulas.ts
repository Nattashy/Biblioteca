import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aulas extends BaseSchema {
  protected tableName = 'aulas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.date('data').notNullable();
      table.text('conteudo').notNullable();
      table.integer('turmas_id').unsigned().references('id').inTable('turmas').notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
