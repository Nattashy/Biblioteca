import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Alunos extends BaseSchema {
  protected tableName = 'alunos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('nome', 100).notNullable();
      table.integer('cpf');
      table.string('matricula', 20).notNullable();
      table.string('email', 100);
      table.string('telefone', 15);
      table.integer('cep');
      table.string('logradouro', 100);
      table.string('complemento', 100);
      table.string('numero', 120);
      table.string('bairro', 100);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
