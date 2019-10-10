// Program which connects Node & MySQL

// Use Node's builtin require() method to load mysql module
let mysql = require('mysql')

// Retrieve MySQL user & password from gitignored config.js
let config = require('./config')['development']

// Create a pool with the potential for 10 connections 
let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: config.user,
    password: config.password,
    database: 'petappointments',
})

// connect to the MySQL server
pool.getConnection(function (err, connection) {
    if (err) {
        connection.release();
        return console.error('error: ' + err.message);
    }

    // query for creating the appointments table if it doesn't already exist 
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
            console.log(err.message)
        }
    });

    // End the connection when we're done using it
    connection.release();
});
