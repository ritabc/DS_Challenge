var pool = require('../db/connect')

exports.create = function (petName, humanName, dateTime, apptType, paid) {
    const paidInt = paid ? 1 : 0
    const values = [petName, humanName, dateTime, apptType, paidInt]
    pool.getConnFromPool(function (connection) {
        const createAppt = 'INSERT INTO appointments(petName, humanName, time, type, paid) VALUES(?, ?, ?, ?, ?)'
        connection.query(createAppt, values, function (err, res, fields) {
            if (err) {
                console.log('error: ' + err.message);
            } else {
                console.log(res)
            }
        });
        connection.release()
    })

}