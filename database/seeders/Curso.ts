import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class CursoSeeder extends BaseSeeder {
  public async run () {
    await Curso.createMany(
      [
        {nome: 'ADS', duracao: 5, modalidade: 'P'},
        {nome: 'Redes', duracao: 5, modalidade: 'P'},
        {nome: 'Direito', duracao: 5, modalidade: 'P'},
        {nome: 'Medicina', duracao: 10, modalidade: 'P'},
        {nome: 'Enfermagem', duracao: 8, modalidade: 'P'},
        {nome: 'Administração', duracao: 5, modalidade: 'E'}
      ]
    )
  }
}
