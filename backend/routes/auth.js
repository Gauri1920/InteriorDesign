const express = require('express');
const router = express.Router();
const { register,login } = require('../controllers/authController');

console.log(register); // Should print [Function: register]

router.post('/register', register);

// Login
router.post('/login', login);

module.exports = router;
