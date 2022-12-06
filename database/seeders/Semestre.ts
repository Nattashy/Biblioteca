import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class SemestreSeeder extends BaseSeeder {
  public async run () {
    await Semestre.createMany(
      [
        {nome: 'A', data_inicio: '2020-02-15', data_fim: '2020-07-15'},
        {nome: 'B', data_inicio: '2020-08-15', data_fim: '2020-12-15'},
        {nome: 'C', data_inicio: '2021-02-15', data_fim: '2021-07-15'},
        {nome: 'D', data_inicio: '2021-08-15', data_fim: '2021-12-15'},
        {nome: 'E', data_inicio: '2022-02-15', data_fim: '2022-07-15'}
      ]
    )
  }
}
