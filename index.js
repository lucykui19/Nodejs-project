const express = require ('express');

const app = express();
const studentRoute = require ('./Route/studentRoute')
const courseRoute = require ('./Route/courseRoute')
const authRoute = require ('./Route/authRoute')


require('dotenv').config()
require('./Model/dbConnect')


app.use(express.json()); //express.json is a body passer pass values from the body to the postman
app.use(express.urlencoded({ extended: true })); //this will parse url encoded data 
app.use('/api/student', studentRoute)  //using the middleware for routes
app.use('/api/course', courseRoute)  //using the middleware for routes
app.use('/api/auth', authRoute)  //using the middleware for routes

app.listen(process.env.port || 4000, function() {
  console.log('Now listening for requests on: https://localhost:4000');
});