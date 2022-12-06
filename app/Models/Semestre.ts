import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Turma from './Turma';

export default class Semestre extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string;

  @column()
  public data_inicio: string;

  @column()
  public data_fim: string;

  @belongsTo( ()=>Turma)
  public turma: BelongsTo<typeof Turma>
}
