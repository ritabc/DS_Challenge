let Appointment = require('../models/Appointment');
let async = require('async');
// Index home page
exports.index = function (req, res) {
    res.render('../frontend/index.ejs');
}

// list of all appointments
exports.appt_list = function (req, res, next) {
    Appointment.all(function (err, queryResult) {
        if (err) { return next(err); }
        // res.json(queryResult);
        res.render('../frontend/appointments.ejs', { appTitle: 'All Appointments' })
    })
}

// Show specific Appt
exports.apppt_show = function (req, res) {
    res.send('TODO: Appt show: ' + req.params.id);
};

// Display Appt create form on GET
exports.appt_create_get = function (req, res) {
    res.send('TODO: Appt create GET');
};

// Handle Appt create on POST
exports.appt_create_post = function (req, res) {
    res.send('TODO: Appt create POST');
}

// Display Appt delete form on GET
exports.appt_delete_get = function (req, res) {
    res.send('TODO: Appt delete GET');
};

// Handle Appt delete on POST
exports.appt_delete_post = function (req, res) {
    res.send('TODO: Appt delete POST');
};

// Display Appt update form on GET
exports.appt_update_get = function (req, res) {
    res.send('TODO: Appt update GET');
};

// Handle Appt update on POST
exports.appt_update_post = function (req, res) {
    res.send('TODO: Appt update POST');
};