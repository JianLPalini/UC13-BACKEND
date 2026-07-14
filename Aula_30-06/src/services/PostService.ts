import bcrypt from "bcrypt";
import { omitPassword } from "../utils/omitPasseword";
import { UserRepository } from "../repositories/UserRepository";
import { PostRepository } from "../repositories/PostRepository";
import { User } from "../models/User";

// A camada Service é responsável por chamar os métodos de Repository e cuidar das validações das nossas regras de negócio (ex: um usuário precisa ter email válido, etc)

// Aqui estamos criando uma classe de erro que extende a classe Error
// Isso é para permitir que, mais tarde, o Controller identifique o tipo de erro de uma forma mais clara

export class NotFoundError extends Error {}
export class ForbiddenError extends Error {}

export const PostService = {
  // Como para listar não precisamos validar nada, aqui só chamamos o método do Repository mesmo, pois o Controller NÃO PODE se comunicar diretamente com Repository, e sim com Service
  async listAll() {
    return PostRepository.findAll();
  },
  
  async getById(id: number) {
    const post = await PostRepository.findById(id);
  
    if (!post) {
      throw new NotFoundError("Post não encontrado!");
    }
  
    return post;
  },

  async listMyPosts(userId: number){
    return PostRepository.findByUserId(userId)
  },

  //import bcrypt from 'bcrypt'

  async create(data: { title: string}, loggedUserId: number) {

    if (!data.title) {
        throw new Error("Título é obrigatório!");
    }

    const user = await UserRepository.findById(loggedUserId);

    if (!user) {
        throw new NotFoundError("Usuário não encontrado!");
    }

    return PostRepository.create({
        title: data.title,
        user
    });
},

  async update(id: number, data: { title?: string}, loggedUserId: number) {  
    const post = await PostRepository.findById(id);

    if(!post){
        throw new NotFoundError("Post não encontrado.")
    }

    if (post.user.id !== loggedUserId) {
        throw new ForbiddenError("Você não tem permissão para editar esse post.");
    }

    if (data.title) post.title = data.title;

    return PostRepository.create(post);
},

async delete(loggedUserId: number) {
    const result = await PostRepository.delete(loggedUserId);

    if (result.affected === 0) {
        throw new NotFoundError('Post não encontrado.');
    }
},
};