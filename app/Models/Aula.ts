import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Chamada from './Chamada';
import Turma from './Turma';

export default class Aula extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public data: string;

  @column()
  public conteudo: string;

  @column()
  public turmas_id: number;

  @belongsTo( ()=>Turma)
  public turmas: BelongsTo<typeof Turma>

  @hasMany( ()=>Chamada)
  public chamadas: HasMany<typeof Chamada>
}
