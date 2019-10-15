
let express = require('express');
let apptsRouter = express.Router();
let indexRouter = express.Router();
let cntrlr = require('../controllers/controller');

// Functions which add a listener (2nd arg) to the event of getting/posting to 1st arg
apptsRouter.get('/', cntrlr.appt_list);
apptsRouter.get('/create', cntrlr.appt_create_get)
apptsRouter.post('/create', cntrlr.appt_create_post)
apptsRouter.get('/:id/delete', cntrlr.appt_delete_get)
apptsRouter.post('/:id/delete', cntrlr.appt_delete_post)
apptsRouter.get('/:id/update', cntrlr.appt_update_get)
apptsRouter.post('/:id/update', cntrlr.appt_update_post)
apptsRouter.get('/:id', cntrlr.apppt_show);

indexRouter.get('/', cntrlr.index)

exports.appts = apptsRouter
exports.index = indexRouter
