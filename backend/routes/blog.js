const {time} = require('../controllers/blog');
const express = require('express')
const router = express.Router()

router.get('/',time)

module.exports = router