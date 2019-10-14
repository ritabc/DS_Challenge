let express = require('express');
let router = express.Router();

// GET home page
router.get('/', function (req, res) {
    res.send('TODO: Home Page, Welcome to PAA')
})

module.exports = router;