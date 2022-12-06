import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class AlunoSeeder extends BaseSeeder {
  public async run () {
    await Aluno.createMany(
      [
        {nome: 'Eduarda Dantas', cpf: 96541387951, matricula: '79856412354', 
        email: 'dudadantas@gmail.com', telefone: '61 99665-4297', cep: 78546931},

        {nome: 'Murilo Castro', cpf: 49256441025, matricula: '96535421871', 
        email: 'murilocastro@gmail.com', telefone: '61 99815-8457', cep: 74596212,
        numero: '54'}

      ]
    )
  }
}
