
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


const express = require('express');
const controller = require('./controllers/controller');
const appointmentsRouter = require('./routes/router').appts;
const indexRouter = require('./routes/router').index;
var app = express();
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Allow index.html to find node_module without exposing internal paths
app.use('/scripts', express.static(__dirname + '/node_modules'))
// Do the same for frontend.js
app.use('/appScripts', express.static(__dirname + '/views'))

// Tell express where to get static files 
app.use(express.static('views'))

// '/' after URL or localhost:port refers to Index or Home
app.use('/', indexRouter);
// '/appointments' after URL or localhost:port refers to Appts routes & appointments controller
app.use('/appointments', appointmentsRouter);

// Get env port
const port = process.env.PORT || 4200;

// Store port using express
app.set('port', port)

// Start express server on defined port
app.listen(port)

module.exports = app;