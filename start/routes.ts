
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/cursos', 'CursosController').apiOnly()
Route.resource('/alunos', 'AlunosController').apiOnly()
Route.resource('/aulas', 'AulasController').apiOnly()
Route.resource('/chamadas', 'ChamadasController').apiOnly()
Route.resource('/disciplinas', 'DisciplinasController').apiOnly()
Route.resource('/professores', 'ProfessoresController').apiOnly()
Route.resource('/salas', 'SalasController').apiOnly()
Route.resource('/semestres', 'SemestresController').apiOnly()
Route.resource('/turmaAlunos', 'TurmaAlunosController').apiOnly()
Route.resource('/turmas', 'TurmasController').apiOnly()