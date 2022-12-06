import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TurmaAluno from 'App/Models/TurmaAluno';

export default class TurmaAlunosController {

  public async index({}: HttpContextContract) {
    const turma_alunos = await TurmaAluno.all();

    return turma_alunos;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['turmas_id', 'alunos_id']);
    const info = await TurmaAluno.create(dados);

    return info;
  }

  public async show({params}: HttpContextContract) {
    const info = await TurmaAluno.findOrFail(params.id);

    return info;
  }

  public async update({request, params}: HttpContextContract) {
    const info = await TurmaAluno.findOrFail(params.id);
    const dados = request.only(['turmas_id', 'alunos_id']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const turma_alunos = await TurmaAluno.findOrFail(params.id);

    await turma_alunos.delete();
  }
}
