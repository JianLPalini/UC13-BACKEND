import { create } from "node:domain";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt'
import { omitPassword } from "../utils/omitPasseword";

// A camada Service é responsável por chamar os métodos de Repository e cuidar das validações das nossas regras de negócio (ex: um usuário precisa ter email válido, etc)

// Aqui estamos criando uma classe de erro que extende a classe Error
// Isso é para permitir que, mais tarde, o Controller identifique o tipo de erro de uma forma mais clara


export class NotFoundError extends Error{}

export const UserService = {

    // Como para listar não precisamos validar nada, aqui só chamamos o método do Repository mesmo, pois o Controller NÃO PODE se comunicar diretamente com Repository, e sim com Service
    async listAll(){
        return UserRepository.findAll()
    },

    async getById(id:number){
        const user = await UserRepository.findById(id)

        if(!user){
            throw new NotFoundError('Usuário não encontrado!')
        }

        // Se encontrou, não cai no 'if' ali em cima, então podemos usar o return e retornar o user
        return user;
    },

    async create(data: {name:string, email: string, password:string}){
        // Este método gera uma senha criptografada 
        const hashedPassword = await bcrypt.hash(data.password,10)


        // Isso gera um objeto que é mais ou menos assim:
        /*
            const user = {
                name: "Joãozin da Quebrada",
                email: "joaozinqbd@gmail.com",
                password: "$2A7806m.ajsdhajshda.7847847"
            }
        */
        const user = await UserRepository.create({
            name: data.name,
            email: data.email,
            password: hashedPassword
        })

        return omitPassword(user)

    }
}