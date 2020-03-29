/**Método UP é o que queremos que seja feito, ou seja, eu quero que seja criado as tabelas de acordo com os campos que passei
 * abaixo
 */
exports.up = function(knex) {

   return knex.schema.createTable('ongs', function (table) {
      
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();   
      });
 
  };

  
/**
 * Método DOWN é o que que quero que seja deletado caso algo dê errado.
 */
exports.down = function(knex) {

    return knex.schema.dropTable('ongs');
  
};
