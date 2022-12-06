import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Turmas extends BaseSchema {
  protected tableName = 'turmas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('nome', 50).notNullable();
      table.integer('professores_id').unsigned().references('id').inTable('professores').notNullable();
      table.integer('semestres_id').unsigned().references('id').inTable('semestres').notNullable();
      table.integer('disciplinas_id').unsigned().references('id').inTable('disciplinas').notNullable();
      table.integer('salas_id').unsigned().references('id').inTable('salas').notNullable();
      table.string('turno', 1).notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
