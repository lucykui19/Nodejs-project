const express = require ( 'express' )

const courseController = require ('../Controller/courseController')
const { verifyAccessToken } = require('../Helpers/jwtHelper');
const router = express.Router()

router.post('/addCourse', verifyAccessToken,courseController.addCourse) //Add a new Student to the database
router.post('/getCourse', verifyAccessToken, courseController.getCourse) //Add a new Student to the database
module.exports = router;