import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala';

export default class SalasController {

  public async index({}: HttpContextContract) {
    const salas = await Sala.all();

    return salas;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['nome', 'capacidade', 'tipo']);
    const info = await Sala.create(dados);

    return info;
  }

  public async show({params}: HttpContextContract) {
    const info = await Sala.findOrFail(params.id);

    return info;
  }

  public async update({request, params}: HttpContextContract) {
    const info = await Sala.findOrFail(params.id);
    const dados = request.only(['nome', 'capacidade', 'tipo']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const salas = await Sala.findOrFail(params.id);

    await salas.delete();
  }
}
