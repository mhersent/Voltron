const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "changeme",
  database: "voltronDB",
  host: "postgres",
  port: 5432,
});

module.exports = pool;
