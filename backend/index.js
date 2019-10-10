// Program which connects Node & MySQL

// Provide access to the pool of MySQL connections
let pool = require('./pool.js')
pool.getConnFromPool(function (connection) {
    let createApptsQuery = `CREATE TABLE IF NOT EXISTS appointments(
        id int NOT NULL, 
        petName varchar(255) NOT NULL, 
        humanName varchar(255) NOT NULL, 
        date date NOT NULL,
        time time NOT NULL,
        type varchar(255),
        paid tinyint(1) NOT NULL DEFAULT 0,
        PRIMARY KEY (id)
        )`;

    connection.query(createApptsQuery, function (err, rows, fields) {
        if (err) {
            console.log('error: ' + err.message)
        } else {
            console.log('No error')
        }
    });

    connection.release();
})