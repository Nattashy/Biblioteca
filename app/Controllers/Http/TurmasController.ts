import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Turma from 'App/Models/Turma';

export default class TurmasController {

  public async index({}: HttpContextContract) {
    const turmas = await Turma.all();

    return turmas;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['nome', 'professores_id', 'semestres_id', 'disciplinas_id', 'salas_id', 'turno']);
    const info = await Turma.create(dados);

    return info;
  }

  public async show({params}: HttpContextContract) {
    const info = await Turma.findOrFail(params.id);

    return info;
  }

  public async update({request, params}: HttpContextContract) {
    const info = await Turma.findOrFail(params.id);
    const dados = request.only(['nome', 'professores_id', 'semestres_id', 'disciplinas_id', 'salas_id', 'turno']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const turmas = await Turma.findOrFail(params.id);

    await turmas.delete();
  }
}
