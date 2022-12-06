import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Salas extends BaseSchema {
  protected tableName = 'salas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('nome', 50).notNullable();
      table.integer('capacidade');
      table.string('tipo', 1).notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
