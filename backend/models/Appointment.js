var pool = require('../db/connect')

// Takes appt data elements and a callback. If successful, callback 
exports.create = function (petName, humanName, dateTime, apptType, paid, callback) {
    const paidInt = paid ? 1 : 0
    const values = [petName, humanName, dateTime, apptType, paidInt]
    pool.getConnFromPool(function (connection) {
        const createAppt = 'INSERT INTO appointments(petName, humanName, time, type, paid) VALUES(?, ?, ?, ?, ?)'
        connection.query(createAppt, values, function (err, res) {
            if (err) {
                callback(err);
            }
            callback(null, res)
        });
        connection.release()
    })
}

exports.all = function (callback) {
    pool.getConnFromPool(function (connection) {
        connection.query('SELECT * FROM appointments', function (err, res) {
            if (err) {
                callback(err);
            }
            callback(null, res)
        });
        connection.release()
    })
}

// helper function which clears rows from the appointments table. To be used with in afterEach() mocha test. Could definitely be more generic (for instance could take a tableName), but since we only have 1 model, place it here as Appointment method
exports.drop = function (callback) {
    pool.getConnFromPool(function (connection) {
        connection.query('DELETE FROM appointments', function (err, res) {
            if (err) {
                callback(err);
            }
            callback(null, res)
        });
        connection.release()
    })
}