import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Curso from "App/Models/Curso"

export default class CursosController {

  public async index({}: HttpContextContract) {
    const cursos = await Curso.all();

    return cursos;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['nome', 'duracao', 'modalidade']);
    const info = await Curso.create(dados);

    return info;
  }

  public async show({params}: HttpContextContract) {
    const info = await Curso.findOrFail(params.id);

    return info;
  }

  public async update({request, params}: HttpContextContract) {
    const info = await Curso.findOrFail(params.id);
    const dados = request.only(['nome', 'duracao', 'modalidade']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const curso = await Curso.findOrFail(params.id);

    await curso.delete();
  }
}
