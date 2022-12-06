import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Curso from './Curso';
import Turma from './Turma';

export default class Disciplina extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
	public nome: string;

  @column()
	public curso_id: number;

  @belongsTo( ()=>Curso)
  public curso: BelongsTo<typeof Curso>

  @belongsTo( ()=>Turma)
  public turmas: BelongsTo<typeof Turma>

}
