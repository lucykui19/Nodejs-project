const express = require('express');
const authController = require('../Controller/auth.controller');
const router = express.Router();

router.post("/addUser",authController.addUser)
router.get("/getAllUsers", authController.getAllUsers)
router.get("/getUser/:id", authController.getUser)
router.patch("/updateUser/:id", authController.updateUser)
module.exports = router;