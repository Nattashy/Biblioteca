import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Chamada from './Chamada';
import TurmaAluno from './TurmaAluno';

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string;

  @column()
  public cpf: number;

  @column()
  public matricula: string;

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

  @hasMany( ()=>Chamada)
  public chamada: HasMany<typeof Chamada>

  @belongsTo( ()=>TurmaAluno)
  public turmaAluno: BelongsTo<typeof TurmaAluno>

  @belongsTo( ()=>Chamada)
  public chamadas: BelongsTo<typeof Chamada>
}
