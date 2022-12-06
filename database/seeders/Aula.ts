import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class AulaSeeder extends BaseSeeder {
  public async run () {
    await Aula.createMany(
      [
        {data: '2020-02-15', conteudo: 'Construção de back-end', turmas_id: 1},
        {data: '2020-02-15', conteudo: 'Construção de front-end', turmas_id: 2}

      ]
    )
  }
}
