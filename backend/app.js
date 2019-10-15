
// Possible TODO: break out connect logic into module
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

// app.use('/', indexRouter);
// OR
// let path = require('path') // sendFile needs absolute path, which we obtain from path.resolve
// app.get('/', function (req, res) {
//     res.render(path.resolve('./frontend/index.html'))
// })
// app.all('/*', function (req, res) {
//     res.sendFile(path.resolve('../backend/frontend/index.html'))
// })
// OR
// app.get('/', controller.index)
// app.get('*', controller.index)

// Allow index.html to find node_module without exposing internal paths
app.use('/scripts', express.static(__dirname + '/node_modules'))
// Do the same for frontend.js
app.use('/appScripts', express.static(__dirname + '/frontend'))

// Tell express where to get static files 
app.use(express.static('frontend'))

// '/' after URL or localhost:port refers to Index or Home
app.use('/', indexRouter);
// '/appointments' after URL or localhost:port refers to Appts routes & appointments controller
app.use('/appointments', appointmentsRouter);


// TODO: try typing in wrong url - possibly fixes this
// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });


// Get env port
// TODO: validate PORT env value is port number
const port = process.env.PORT || 4200;

// Store port using express
app.set('port', port)

// Start express server on defined port
app.listen(port)

module.exports = app;