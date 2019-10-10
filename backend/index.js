// Program which connects Node & MySQL

// Provide access to the pool of MySQL connections
let pool = require('./db/connect')
pool.getConnFromPool(function (connection) {
    let createApptsQuery = `CREATE TABLE IF NOT EXISTS appointments(
        id int NOT NULL auto_increment PRIMARY KEY, 
        petName varchar(255) NOT NULL, 
        humanName varchar(255) NOT NULL, 
        time datetime NOT NULL,
        type varchar(255),
        paid tinyint(1) NOT NULL DEFAULT 0
        )`;

    connection.query(createApptsQuery, function (err, res, fields) {
        if (err) {
            console.log('error: ' + err.message)
        } else {
            console.log('No error')
        }
    });

    connection.release();
})