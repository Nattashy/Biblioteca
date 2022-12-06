import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Turma from './Turma';

export default class Professore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string;

  @column()
  public cpf: number;

  @column()
  public matricula: string;

  @column()
  public salario: string;

  @column()
  public email: string;

  @column()
  public telefone: string;

  @column()
  public cep: number;

  @column()
  public logradouro: string;

  @column()
  public complemento: string;

  @column()
  public numero: string;

  @column()
  public bairro: string;

  @belongsTo( ()=>Turma)
  public turma: BelongsTo<typeof Turma>
}
