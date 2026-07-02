import { NextFunction, Request, Response } from "express";

// Esse middleware vai formatar cada resposta e erro. Ao inves de cada controller ter que pegar um erro e formatar a mensagem bonitinha, ele faz isso pra todo mundo, tipo aquele seu amigo que fez todo o trabalho enquanto tu ficou no celular pq vc sabia que ele ia fazer pra ti mesmo.
export function errorHandler(error:any, req:Request, res:Response, next:NextFunction){
    
    // Antes de mais nada, a gente mostra o erro "na forma original" dele pra debugar
    // Se vc n sabe o que é debugar, pesquisa no google
    console.error("Erro capturado pelo errorHandler: ", error)

    // Esse tal de 'ER_DUP_ENTRY' é específico do MySQL: ele acontece quando a gente tenta salvar algo que já existe e tem UNIQUE (exemplo: criar um usuário com um email que já exites)
    if (error.code === 'ER_DUP_ENTRY') {
        // statu 409 é pra entrada duplicada
        return res.status(409).json({
            messege: 'Registro duplica (email já existente).'
        }) 
    }

    // Se for qualquer outro erro que a gente não previu pq não previu pq não tem bola de cristal, ele vira um 500 genérico
    return res.status(500).json({
        message: "Erro interno do servidor. Traduzindo: DEU RUIM, GURIZADA!"
    })
}