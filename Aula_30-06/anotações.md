## Ordem de Desenvolvimento

 - instalar as dependências
 - configurar o tsconfig.json
 - criar o banco de dados
 - configurar o .env
 - na camada config, fazer o data-source para conectar com o banco, usando as variáveis que estão no .env
 - na camada model, criar as entidades
 - criar o server e rodar para verificar se tudo está correto e se sobem as tabelas. Mais tarde ele dever ser editado/aprimorado.

 ### A PARTIR DAQUI, NÃO VAMOS CRIAR OS SCRIPTS COMPLETOS, VAMOS TRABALHANDO UM POUCO EM CADA CAMADA E SEGUINDO ADIANTE

 - na camada repositories, criamos o script de 'create'
 - na camada services, também fazemos o script de 'create', fazemos as validações, etc.
 - na camada controllers, fazemos o método 'create' com req, res, etc.
 - Ai, configuramos os middlewares
 - Depois, fazemos a rota de 'create', que é um POST.
 - Voltamos ao server, acrescentamos o necessário (ex: app.use(routes), etc etc)
 - Rodamos o server e testamos a rota de POST que criamos.
 
 FAZEMOS ISSO PARA TODAS AS ROTAS, UMA POR UMA.