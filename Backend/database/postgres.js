const { Client } = require("pg")
const db = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "mynfodatabase",
})

db.connect();
module.exports = db;
