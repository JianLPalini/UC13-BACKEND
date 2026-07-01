import express from 'express';

/*
    Cria o objeto express.
    Através dele vamos ter acesso a métodos que nos permitem
    criar o nosso servidor.
*/

const app = express()
const PORTA = 3000;

/*
    Aqui embaixo informamos que nosso servidor vai receber e enviar
    dados em JSON
*/

app.use(express.json())

// get significa 'pegar'
// ou seja, está é uma rota para PEGAR uma INFORMAÇÃO
// rotas precisam de pelo menos 2 parâmetros:
// o primeiro é o caminho
// o segundo é uma função que é chamada quando eu acessar a rota
// essa função também precisa de 2 parâmetros: req e res
// req representa a requisição
// re representa a resposta do servidor
app.get("/nome", (req, res) => {
    //res.status(200) significa que o servidor vai enviar um código de sucesso(o número 200)
    //res.status(200).send("mensagem") é o que envia a resposta inteira
    res.status(200).send("Elisa Lopes está conectada no servidor!")
})

// É o que inicia o servidor, põe ele pra rodar
/*
    A função listen() precisa de 2 parâmetros:
    - o primeiro é a porta
    - o segundo é uma função que vai ser chamada quando o servidor rodar.
*/
app.listen(PORTA, () => {
    console.log("Elisa Lopes está conectada no servidor!")
})


