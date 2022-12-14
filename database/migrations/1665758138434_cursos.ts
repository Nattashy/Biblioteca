import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cursos extends BaseSchema {
  protected tableName = 'cursos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string("nome", 50).notNullable();
      table.integer("duracao");
      table.string("modalidade", 1).notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
