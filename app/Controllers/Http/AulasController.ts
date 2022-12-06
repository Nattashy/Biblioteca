import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aula from 'App/Models/Aula';

export default class AulasController {

  public async index({}: HttpContextContract) {
    const aulas = await Aula.all();

    return aulas;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['data', 'conteudo', 'turmas_id']);
    const info = await Aula.create(dados);

    return info;
  }

  public async show({params}: HttpContextContract) {
    const info = await Aula.findOrFail(params.id);

    return info;
  }

  public async update({request, params}: HttpContextContract) {
    const info = await Aula.findOrFail(params.id);
    const dados = request.only(['data', 'conteudo', 'turmas_id']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const aulas = await Aula.findOrFail(params.id);

    await aulas.delete();
  }
}
