const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hw8",
  password: "15042003",
  port: "5432",
});

module.exports = pool;
