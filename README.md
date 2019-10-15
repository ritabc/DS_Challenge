# README
A practice project using Node.js, AngularJS, and MySQL, along with other libraries including faker (for seeding data), express, mocha & chai(for testing), nodemon for hot reloading and express middleware for routing, to create an application with CRUD capabilities for pet appointment app data. 
By Rita Bennett-Chew

## Overall App Status
Prior to the start of working on this application, I had not used Node or AngularJS, so it was an adventure learning them. I definitely got stuck on a few things, just like everyone does when learning a new framework and working through the syntax, imports, etc. The ngRoute & ng-views gave me some trouble, so I was glad to finally figure those out.

Below I have listed some minor changes I would make were I to do this project over again, however a main piece I would do differently is the starting point. Here I started learning Node, and worked on building an MVC structrue on the backend. However, I realized later that because the AngularJS framework is more encompassing, it would have made more sense to start with the Angular frontend side. 

All in all, I definitely learned a lot, however please note the app is not completely functional. I focused on getting the MVC framework set up first, including seeding the database, then integrated it with the Angular frontend. Finally I worked on completing the CRUD functionality throughout the entire application. This last step is not complete - you will notice the get '#!/appoinments' route/view is the only one fully functioning

## Decisions Made
- Addition of connection pooling. Since this is a demonstration application, the issue of waiting for the connections to & from MySQL is not major - not much time is wasted there, relatively. However, since it's best practice when creating larger applications with many database queries around the same time, I went ahead and implemented it here. This isn't hurting anything since connections are created lazily (as in, if only 2 connections are needed at the same time, the pool only created 2). I also decided to make the pool it's own module so it can be used in index.js, and models/Appointment.js
- Since I'm not deploying this in a production environment, I gitignored node_modules
- Store appt times as DateTime in MySql, separate out down the line
## Requirements for Setup
- MySQL
- Fork, Clone, and Download the repository
- Run `npm install` from app directory 
- Create databases in MySQL:
    * mysql> `CREATE DATABASE petappointments;`
    * mysql> `CREATE DATABASE petappointmentsTest;`

- Set up app/db/config.js file: 
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
- Seed database once by running `node app/db/seed.js` from project root directory
- To run tests: 
    1. Create table in petappointmentsTest with: mysql> `CREATE TABLE IF NOT EXISTS appointments(id int NOT NULL auto_increment PRIMARY KEY, petName varchar(255) NOT NULL, humanName varchar(255) NOT NULL, time datetime NOT NULL, type varchar(255), paid tinyint(1) NOT NULL DEFAULT 0);`
    1. Run $ `npm test`


## Things I'd do differently next time
- Add a migrations package like `mysql-migrations` to manage multiple users / developers working on the same project in order to keep the databases consistent 
- Use an ORM like Sequelize. For now I was learning a few new things and wanted to get the basics down of node
- Might install and configure Babel in order to use ES6 