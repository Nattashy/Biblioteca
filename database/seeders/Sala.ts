import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class SalaSeeder extends BaseSeeder {
  public async run () {
    await Sala.createMany(
      [                           
        {nome: 'Laboratório',capacidade: 50, tipo: 'A'},
        {nome: 'Sala 1', capacidade: 60, tipo: 'B'},
        {nome: 'Sala 2',capacidade: 40, tipo: 'C'},
        {nome: 'Laboratório 2',capacidade: 40, tipo: 'D'}
      ]
    )
  }
}
