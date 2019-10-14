
let express = require('express');
let router = express.Router();
let appt_controller = require('../controllers/appointmentController');

// Functions which add a listener (2nd arg) to the event of getting/posting to 1st arg
router.get('/', appt_controller.appt_list);
router.get('/create', appt_controller.appt_create_get)
router.post('/create', appt_controller.appt_create_post)
router.get('/:id/delete', appt_controller.appt_delete_get)
router.post('/:id/delete', appt_controller.appt_delete_post)
router.get('/:id/update', appt_controller.appt_update_get)
router.post('/:id/update', appt_controller.appt_update_post)
router.get('', appt_controller.apppt_show);

module.exports = router