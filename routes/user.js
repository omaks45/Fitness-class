const express = require("express")
const signup = require("../controller/user")
const signin = require("../controller/user")
const signout = require('../controller/user')
const contacts = require('../controller/user')
const sendClassReminders = require('../controller/user')
const resetPassword = require('../controller/user')
const {check} = require('express-validator')
const router = express.Router()

console.log('signup started')
router.post('/signup', [
  check("name", "Name atleast should be 3 characters").isLength({min: 3}),
  check("email", "Email should be valid").isEmail(),
  check("password", "Password at least should be 6 characters").isLength({min: 6}),
] ,signup)

console.log('login started')
router.post('/login', [
  check("email", "Email should be valid").isEmail(),
  check("password", "Password at least should be 6 characters").isLength({min: 6}),
] ,signin)

//router.post('/forgot-password', resetPassword)

router.get("/signout", signout)

console.log('contacts started')
router.post('/contact', contacts)

console.log('sendClassReminders started')
router.post('/BookForm', sendClassReminders)

module.exports = router