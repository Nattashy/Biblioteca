import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Disciplina from './Disciplina';

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string;

  @column()
  public duracao: number;

  @column()
  public modalidade: string;

  @hasMany( ()=>Disciplina)
  public disciplinas: HasMany<typeof Disciplina>

}
