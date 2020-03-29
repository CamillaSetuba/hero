// Update with your config settings.

module.exports = {

  //Ambiente de produção
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite' //Criada a conexão com o banco de dados. Todas as informações ficarão neste arquivo.
    },
 
  migrations: {
    directory:'./src/database/migrations'
  },

  useNullAsDefault:true,//O SQLite não aceita valores padrões, este comando irá evitar o aviso que ocorre quando criamos as migrations.
},

  //Ambiente de produção para os devs
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
 //Ambiente de produção
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
