import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Chamadas extends BaseSchema {
  protected tableName = 'chamadas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('aula_id').unsigned().references('id').inTable('aulas').notNullable();
      table.integer('alunos_id').unsigned().references('id').inTable('alunos').notNullable();
      table.string('presenca').notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
