import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professore from 'App/Models/Professore';

export default class ProfessoresController {

  public async index({}: HttpContextContract) {
    const professores = await Professore.all();

    return professores;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['nome', 'cpf', 'matricula', 'salario', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro']);
    const info = await Professore.create(dados);

    return info
  }

  public async show({params}: HttpContextContract) {
    const info = await Professore.findOrFail(params.id);

    return info
  }

  public async update({request, params}: HttpContextContract) {
    const info = await Professore.findOrFail(params.id);
    const dados = request.only(['nome', 'cpf', 'matricula', 'salario', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const professores = await Professore.findOrFail(params.id);

    await professores.delete();
  }
}
