const express = require("express");
const router = express.Router();

const phones = require('../controllers/phones.controller')

router.get('/', phones.list)

router.get('/phones/:id', phones.findId)



module.exports = router;
