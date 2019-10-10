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
    console.log('Connected to the MySQL server.');

    connection.release();
});

// close all the connections in the pool
pool.end(function (err) {
    if (err) {
        return console.log('error:' + err.message);
    }
    console.log('Close the databse connection.');
});