import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Turma from './Turma';

export default class Sala extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string;

  @column()
  public capacidade: number;

  @column()
  public tipo: string;

  @belongsTo( ()=>Turma)
  public turma: BelongsTo<typeof Turma>
}
