import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professore from 'App/Models/Professore'

export default class ProfessoreSeeder extends BaseSeeder {
  public async run () {
    await Professore.createMany(
      [
        {nome: 'Maria Silva', cpf: 123456578900, matricula: '12345678889', 
        salario: '3500.00', email: 'mariasilva@gmail.com', telefone: '61 99665-4297', cep: 72270695},

        {nome: 'João Batista', cpf: 12345657855, matricula: '12345678889', 
        salario: '2000.00', email: 'joaobatista@gmail.com', telefone: '61 99815-8457', cep: 72870695,
        numero: '54'}
      ]
    )
  }
}
