import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class DisciplinaSeeder extends BaseSeeder {
  public async run () {
    await Disciplina.createMany(
      [
        {nome: 'Construção de Backend', curso_id: 1},
        {nome: 'Engeranharia de software e Métodos Ágeis', curso_id: 1},
        {nome: 'Estrutura de Dados', curso_id: 1},
        {nome: 'Introdução ao Direito', curso_id: 1}
      ]
    )
  }
}
