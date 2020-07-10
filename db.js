const knex = require("knex")({
  client: "pg",
  connection: {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "postslist",
  },
});

module.exports = knex;
