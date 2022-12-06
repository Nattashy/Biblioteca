import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Aluno from './Aluno';
import Aula from './Aula';

export default class Chamada extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public aula_id: number;

  @column()
  public alunos_id: number;

  @column()
  public presenca: string;

  @hasMany( ()=>Aluno)
  public alunos: HasMany<typeof Aluno>

  @belongsTo( ()=>Aula)
  public aulas: BelongsTo<typeof Aula>

}
