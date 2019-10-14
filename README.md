# README
A practice project using Node.js, AngularJS, and MySQL, along with _other libraries including faker (for seeding data), express, mocha & chai(for testing), nodemon for hot reloading (),_, to create an application with CRUD capabilities for _data_. 
By Rita Bennett-Chew

## Decisions Made
- Most apps would have configuration environment variables for development, production, and test, but I decided to not use different environments - just development
- Addition of connection pooling. Since this is a demonstration application, the issue of waiting for the connections to & from MySQL is not major - not much time is wasted there, relatively. However, since it's best practice when creating larger applications with many database queries around the same time, let's go ahead and implement it here. This isn't hurting anything since connections are created lazily (as in, if only 2 connections are needed at the same time, the pool only created 2). I also decided to make the pool it's own module so it can be used in index.js, and models/Appointment.js
- Since I'm not deploying this in a production environment, I gitignored node_modules
- Store appt times as DateTime in MySql, separate out down the line
## Decisions - Need to Make
- add a new db & env for test?
- add 
## Requirements for Setup
- MySQL
- Fork, Clone, and Download the repository
- Create databases in MySQL:
    * mysql> `CREATE DATABASE petappointments;`
    * mysql> `CREATE DATABASE petappointmentsTest;`

- Set up backend/db/config.js file: 
```
let config = {
    development: {
        user: 'root',
        password: '<password>',
        database: 'petappointments'
    },
    test: {
        user: 'root',
        password: '<password>',
        database: 'petappointmentsTest'
    }
}
module.exports = config
```
- Seed database once by running `node backend/db/seed.js` from project root directory
- To run tests: 
    1. Create table in petappointmentsTest with: mysql> `CREATE TABLE IF NOT EXISTS appointments(id int NOT NULL auto_increment PRIMARY KEY, petName varchar(255) NOT NULL, humanName varchar(255) NOT NULL, time datetime NOT NULL, type varchar(255), paid tinyint(1) NOT NULL DEFAULT 0);`
    1. Run $ `npm test`
## Lessons Learned
* A lot of new
    - Node.js backend
    - Angular.js frontend

## Things I might do differently next time
- Add a migrations package like `mysql-migrations` to manage multiple users / developers working on the same project in order to keep the databases consistent 
- Use an ORM like Sequelize. For now I was learning a few new things and wanted to get the basics down of node
- Might install and configure Babel in order to use ES6 

## Stretch Goals / Next Steps
- Adding data validation 
- Responsive UI - ie collapse navbar