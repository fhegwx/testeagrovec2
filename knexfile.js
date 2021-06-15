
const path= require('path')
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "agrovec",
      user:"postgres",
      password: "admin"
    }, 
    migrations:{ 
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  }
};


