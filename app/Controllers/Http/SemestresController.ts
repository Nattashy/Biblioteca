import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Semestre from 'App/Models/Semestre';

export default class SemestresController {
  
  public async index({}: HttpContextContract) {
    const semestre = await Semestre.all();

    return semestre;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['nome', 'data_inicio', 'data_fim']);
    const info = await Semestre.create(dados);

    return info;
  }

  public async show({params}: HttpContextContract) {
    const info = await Semestre.findOrFail(params.id);

    return info;
  }

  public async update({request, params}: HttpContextContract) {
    const info = await Semestre.findOrFail(params.id);
    const dados = request.only(['nome', 'data_inicio', 'data_fim']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const semestre = await Semestre.findOrFail(params.id);

    await semestre.delete();
  }
}
