import { create } from "node:domain";
import { PostRepository } from "../repositories/PostRepository";
import { title } from "node:process";
import { UserRepository } from "../repositories/UserRepository";



export class NotFoundError extends Error { }

export const PostService = {

    async listAll() {
        return PostRepository.findAll()
    },

    async getById(id: number) {
        const post = await PostRepository.findById(id)

        if (!post) {
            throw new NotFoundError('Usuário não encontrado!')
        }

        return post;
    },

    async create(data: { title: string, userId: number }) {
        const user = await UserRepository.findById(data.userId)

        if(!data.title){
            throw new Error("Título é obrigatório")
        }
        
        if(!data.userId){
            throw new Error("Usuário é obrigatório")
        }

        if(!user) {
            throw new NotFoundError("Usuário não encontrado!")
        }


        return PostRepository.create({
            title: data.title,
            user
        })

    },

    async update(id: number, data: { title?: string, userId?: number }) {

        const post = await PostRepository.findById(id)

        if (!post) {
            throw new NotFoundError('Usuário não encontrado!')
        }

        if (data.title) post.title = data.title

        const updatePost = await PostRepository.create(post)
        return updatePost

    },

    async delete(id: number) {
        const post = await PostRepository.delete(id);

        if (post.affected === 0) {
            throw new NotFoundError('Usuário não encontrado!');
        }
    }





}