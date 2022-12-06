import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class TurmaSeeder extends BaseSeeder {
  public async run () {
    await Turma.createMany(
      [
        {nome: 'AB', professores_id: 1, semestres_id: 1, disciplinas_id: 2, salas_id: 2,
        turno: 'Noturno'},

        {nome: 'AC', professores_id: 1, semestres_id: 1, disciplinas_id: 2, salas_id: 2,
        turno: 'Noturno'},

        {nome: 'BC', professores_id: 2, semestres_id: 1, disciplinas_id: 2, salas_id: 2,
        turno: 'Noturno'},

        {nome: 'CD', professores_id: 2, semestres_id: 1, disciplinas_id: 2, salas_id: 2,
        turno: 'Noturno'}

      ]
    )
  }
}
