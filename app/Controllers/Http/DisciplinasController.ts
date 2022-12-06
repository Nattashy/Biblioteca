import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Disciplina from 'App/Models/Disciplina';

export default class DisciplinasController {

  public async index({}: HttpContextContract) {
    const disciplina = await Disciplina.all();

    return disciplina;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['nome', 'curso_id']);
    const info = await Disciplina.create(dados);

    return info;
  }

  public async show({params}: HttpContextContract) {
    const info = await Disciplina.findOrFail(params.id);

    return info;
  }

  public async update({request, params}: HttpContextContract) {
    const info = await Disciplina.findOrFail(params.id);
    const dados = request.only(['nome', 'curso_id']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const disciplina = await Disciplina.findOrFail(params.id);

    await disciplina.delete();
  }
}
