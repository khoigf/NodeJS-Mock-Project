const express = require('express');
const { postLogin} = require('../controllers/homeController')
const router = express.Router();

router.post('/login',postLogin)

module.exports = router;