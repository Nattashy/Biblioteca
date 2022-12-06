import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Aula from './Aula';
import Disciplina from './Disciplina';
import Professore from './Professore';
import Sala from './Sala';
import Semestre from './Semestre';
import TurmaAluno from './TurmaAluno';

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string;

  @column()
  public professores_id: number;

  @column()
  public semestres_id: number;

  @column()
  public disciplinas_id: number;

  @column()
  public salas_id: number;

  @column()
  public turno: string;

  @belongsTo( ()=>TurmaAluno)
  public turmaAluno: BelongsTo<typeof TurmaAluno>

  @hasMany( ()=>Professore)
  public professores: HasMany<typeof Professore>

  @hasMany( ()=>Semestre)
  public semestre: HasMany<typeof Semestre>

  @hasMany( ()=>Disciplina)
  public disciplinas: HasMany<typeof Disciplina>

  @hasMany( ()=>Sala)
  public sala: HasMany<typeof Sala>

  @hasMany( ()=>Aula)
  public aula: HasMany<typeof Aula>
}