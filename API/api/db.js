const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "changeme",
    database: "voltronDB",
    host: "localhost",
    port: 6432
});

module.exports = pool;