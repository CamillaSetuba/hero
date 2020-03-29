

/**
 * Este será o arquivos de rotas, pois elas podem se tornar muitas e por isso poderá criar confusão dentro do código
 */
 
const express = require ('express');  // Chamando o Express
const crypto = require ('crypto');//chamando o pacote crypto que vai gerar uma string aleatório para o id
const routes = express.Router(); //Criando a variável Routes, que vai receber o express.router
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

//controle login
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); //seta faz parte do código. Super novidade para mim ;  REQUEST- Guarda as requisições, 
 
routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
   //como este insert pode semorar um pouco e a aplicação só irá retornar o json no momento em que todos os inserts forem feitos, vamos devolver o id enquanto o insert é feito. Para isso vamos usar o await
//});

/**
* Como as rotas vão esta desaclopadas do index , nós teremos que exportar elas para que possamos inportar no nosso index
*/

module.exports = routes; //comando que exporta as rotas
