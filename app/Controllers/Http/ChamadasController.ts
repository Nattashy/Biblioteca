import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Chamada from 'App/Models/Chamada';

export default class ChamadasController {

  public async index({}: HttpContextContract) {
    const chamadas = await Chamada.all();

    return chamadas;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['aula_id', 'alunos_id', 'presenca']);
    const info = await Chamada.create(dados);

    return info;
  }

  public async show({params}: HttpContextContract) {
    const info = await Chamada.findOrFail(params.id);

    return info;
  }

  public async update({request, params}: HttpContextContract) {
    const info = await Chamada.findOrFail(params.id);
    const dados = request.only(['aula_id', 'alunos_id', 'presenca']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const chamadas = await Chamada.findOrFail(params.id);

    await chamadas.delete();
  }
}
