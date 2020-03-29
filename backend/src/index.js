//importando o modulo chamado express para dentro da váriável express. São as funcionalidades  do express
// A variável express irá receber todas as funcionalidades do express

const express = require ('express');//Importando os pacotes do Express
const cors = require ('cors');
const routes = require ('./routes'); //Importando a rota. Usamos o './' para indicar que estamos importando um arquivoi e não um pacote
//const cria a váriável
//Criando a váriável app para armazenar a aplicação. Instanciando

const app = express();

app.use(cors()); //módulo cors define quem poderá acessar a aplicação- como estamos em desenvolvimento todas os front-ends poderão acessar
app.use (express.json()) //Informa para o express ir ao corpo da requisição e converter para algo que a aplicação entenda o que esta sendo solicitado.
app.use(routes);


//Esta mandando a aplicação ler a porta 3333
app.listen(3333);


