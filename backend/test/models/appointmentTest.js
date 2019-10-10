const expect = require('chai').expect;
const Appointment = require('../../models/Appointment');

describe('Appointment', function () {

    beforeEach(function (done) {
        Appointment.drop(function (err, res) {
            if (err) {
                return done(err)
            }
            done()
        })
    })

    describe('#create', function () {
        it('should successfully create an appointment', function (done) {
            Appointment.create("Timmy", "John Smith", new Date(), 'Haircut', true, function (err, res) {
                if (err) {
                    return done(err);
                }
                expect(res).to.be.a('Object')
                expect(res).to.have.property('insertId')
                done()
            })
        })
    })

    describe('#all', function () {
        it('should result in array of rows in appointments table', function (done) {
            Appointment.all(function (err, appointments) {
                if (err) {
                    return done(err);
                }
                expect(appointments).to.be.an('array')
                done()
            })
        })
    })
})