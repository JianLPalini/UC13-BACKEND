import  express  from "express";
import * as dotenv from 'dotenv'
import { AppDataSource } from "../src/config/data-source";
import { routes } from "./routes";

const app = express()
dotenv.config()

app.use(routes)

const PORT = process.env.PORT // pega o valor da variável PORT que está no .env

AppDataSource.initialize().then(() => {
    console.log("Banco conectado com sucesso!")

    app.listen(PORT, () => {
        console.log("Servidor backend no ar!")
    })
}).catch ((error) => console.log("Erro ao conectar com o banco: " + error)) 