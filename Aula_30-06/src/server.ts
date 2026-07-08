import  express  from "express";
import * as dotenv from 'dotenv'
import { AppDataSource } from "../src/config/data-source";
import { routes } from "./routes";

const app = express()
dotenv.config()

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT // pega o valor da variável PORT que está no .env

AppDataSource.initialize().then(() => {
    console.log("Banco conectado com sucesso!")

    app.listen(PORT, () => {
        console.log("Servidor backend no ar!")
    })
}).catch ((error) => console.log("Erro ao conectar com o banco: " + error)) 


/*

    Criar um novo projeto
    Instalar as dependências
    Configurar tsconfig, etc

    Criar as entidades User e Task

    User deve ter:
    -id
    -name
    -email
    -password

    Task deve ter:
    -id
    -title
    -description

    faça as relações
    O objetivo é criar o backend de um gerenciador de tarefas, onde um usuário pode criar várias tarefas.

*/