import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TurmaAluno from 'App/Models/TurmaAluno'

export default class TurmasAlunoSeeder extends BaseSeeder {
  public async run () {
    await TurmaAluno.createMany(
      [
        {turmas_id: 1, alunos_id: 1},
        {turmas_id: 1, alunos_id: 2}

      ]
    )
  }
}
