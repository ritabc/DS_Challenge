// Program which exports a MySQL pool of connections for use throughout the app

// Use Node's builtin require() method to load mysql module
let mysql = require('mysql')

// Retrieve MySQL user & password from gitignored config.js
let config = require('../config')['development'];

// Create a pool with the potential for 10 connections 
let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: config.user,
    password: config.password,
    database: 'petappointments',
})

// export getConnFromPool() method to DRY error handling & actural querying - call callback after making the connection
// Whenever getConnFromPool() is called, the callback must contain connection.release()
exports.getConnFromPool = function (callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            return console.error('error: ' + err.message);
        }
        callback(connection)
    });
};