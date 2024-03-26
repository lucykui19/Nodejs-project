const express = require ( 'express' )

const studentController = require ('../Controller/studentController');
const { verifyAccessToken } = require('../Helpers/jwtHelper');
const router = express.Router()

router.post('/addStudent', verifyAccessToken, studentController.addStudent) //Add a new Student to the database
router.post('/getStudent', verifyAccessToken, studentController.getStudent) //Add a new Student to the database

module.exports = router; 