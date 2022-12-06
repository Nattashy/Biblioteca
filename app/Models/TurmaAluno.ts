import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Aluno from './Aluno';
import Turma from './Turma';

export default class TurmaAluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public turmas_id: number;

  @column()
  public alunos_id: number;

  @hasMany( ()=>Aluno)
  public aluno: HasMany<typeof Aluno>

  @hasMany( ()=>Turma)
  public turma: HasMany<typeof Turma>
}
