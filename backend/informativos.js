/**
 * Este será o arquivos de rotas, pois elas podem se tornar muitas e por isso poderá criar confusão dentro do código
 */
 
const express = require ('express');  // Chamando o Express

const routes = express.Router(); //Criando a variável Routes, que vai receber o express.router


routes.post('/users', (request,response) => { //seta faz parte do código. Super novidade para mim ;  REQUEST- Guarda as requisições, 
   //const params = request.query;
   //const params = request.params;
   //const params = request.params(Router é acessado atravéz do params) app.get('/users/:id', (request,response) => {
    
   /**
    * Configurando banco de dados
    * SQL: MySql, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    * 
    * No nosso projeto iremos usar o SQlite
    */

   /**
    * Comunicação com o banco de dados: Ela se dará de 3 formas-
    * Instalando o DRIVER DO BANCO DE DADOS (Usaremos então esta forma de comunicação): SELECT * FROM  users
    * 
    * Usando a Query Builder (Usando Java script para se comunicar): table('users').select('*').where() . 
    * A Query Builder que vamos utilizar é a KNEX.JS
    * 
    */
   
    //Rotas / Recursos (user é um recurso que será acessado)
/**
* Metódos HTTP
* 
* GET: Buscar/listar uma informação do Back-end
* POST: Criar uma informação no Back-end 
* PUT: Alterar uma informação no Back-end
* DELETE: Deletar uma informação no Back-end
*/

/**
*Tipos de parâmetros:
*
Query params:São Parâmetros nomeados enviados na rota após "?"(Filtros, Paginação)
Route Params:Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para alterar ou criar recursos
*/
   const body = request.body;

   console.log(body); 

   return response.json({     //RESPONSE - retorna a solicitação da requisição
       evento: 'Semana Omnistack 11.0',
       aluno: 'Camilla Setuba'
   });
});

/**
* Como as rotas vão esta desaclopadas do index , nós teremos que exportar elas para que possamos inportar no nosso index
*/

module.exports = routes; //comando que exporta as rotas
