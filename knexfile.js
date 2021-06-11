// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "agrovec",
      user:"postgres",
      password: "admin"
    }
  }
};

migrations: {
tableName: 'knex_migration',
directory `${__dirname}/src/database`
}; 
