/**
 * Este arquivo será o responsável pela conecxão com o banco
 */

 const knex = require('knex');
 const configuration = require('../../knexfile');

 const connection = knex(configuration.development);

 module.exports = connection;