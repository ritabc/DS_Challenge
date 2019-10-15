const Appointment = require('../models/Appointment');
const faker = require('faker');

for (let i = 0; i < 20; i++) {
    // name our pets after faker products
    const pet = faker.commerce.product()
    const human = faker.name.findName()
    const dateTime = generateRandomMySQLApptTime()
    const types = ['Haircut', 'Nail Trim', 'Vaccinations', 'Teeth Clean', 'X-Rays']
    // cycle through types
    const type = types[i % types.length]
    const paid = faker.random.boolean
    Appointment.create(pet, human, dateTime, type, paid)
}

function generateRandomMySQLApptTime() {
    const octNovOrDec = Math.round(Math.random() * 2) + 9;
    const dayInMonth = Math.ceil(Math.random() * 31);
    const acceptingHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];
    const hour = acceptingHours[Math.round(Math.random() * 8)];
    // Treat dates as UTC
    const appt = new Date(Date.UTC(2019, octNovOrDec, dayInMonth, hour, 0, 0));
    return appt.toISOString().slice(0, 19).replace('T', ' ');
}