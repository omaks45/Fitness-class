const express = require("express")
const {signup, signin, signout, contacts, bookClass, authenticateUser, resetPassword } = require("../controller/user")
const {check} = require('express-validator')
const router = express.Router()


router.post('/signup',  [
  check("name", "Name atleast should be 3 characters").isLength({min: 3}),
  check("email", "Email should be valid").isEmail(),
  check("password", "Password at least should be 6 characters").isLength({min: 6}),
] ,signup)


router.post('/login', [
  check("email", "Email should be valid").isEmail(),
  check("password", "Password at least should be 6 characters").isLength({min: 6}),
] ,signin)

//router.post('/forgot-password', resetPassword)

router.get("/signout", signout)

router.post('/forgot-password', resetPassword)
router.post('/contact', contacts)

router.post('/BookForm', authenticateUser, bookClass)

module.exports = router