import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Disciplinas extends BaseSchema {
  protected tableName = 'disciplinas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('nome', 50).notNullable();
      table.integer('curso_id').unsigned().references('id').inTable('cursos').notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
