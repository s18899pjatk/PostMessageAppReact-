const options = process.env.NODE_ENV === 'production' ? {
  client : "pg",
  connection : process.env.DATABASE_URL, searchPath: ['public'] 
} : {
  client: "pg",
  connection: {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "postslist",
  }
}

const knex = require("knex")(options);

module.exports = knex;
