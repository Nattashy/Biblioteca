import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TurmaAlunos extends BaseSchema {
  protected tableName = 'turma_alunos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('turmas_id').unsigned().references('id').inTable('turmas').notNullable();
      table.integer('alunos_id').unsigned().references('id').inTable('alunos').notNullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
