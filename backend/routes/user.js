//jshint esversion: 9
const express = require("express");

const UserController = require('../controllers/user');


const router = express.Router();

router.post("/signup", UserController.createrUser);

router.post("/login", UserController.userLogin);

module.exports = router;
