import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno';

export default class AlunosController {

  public async index({}: HttpContextContract) {
    const alunos = await Aluno.all();

    return alunos;
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['nome', 'cpf', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro' ]);
    const info = await Aluno.create(dados);

    return info;
  }

  public async show({params}: HttpContextContract) {
    const info = await Aluno.findOrFail(params.id);

    return info;
  }

  public async update({request, params}: HttpContextContract) {
    const info = await Aluno.findOrFail(params.id);
    const dados = request.only(['nome', 'cpf', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro']);

    info.merge(dados);

    await info.save();

    return info;
  }

  public async destroy({params}: HttpContextContract) {
    const alunos = await Aluno.findOrFail(params.id);

    await alunos.delete();
  }
}
