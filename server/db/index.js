const mysql = require('mysql');

const pool = mysql.createConnection({
    connectionLimit: 10,
    password: 'root',
    user: 'root',
    port: '3306',
    host: 'localhost',
    database: 'squire'
})

let db = {}
pool.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

module.exports = pool;