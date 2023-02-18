const express = require('express')
const router = express.Router()
const Controller = require('../controller/apiExternaController')

router.get("/populares", Controller.consultaPelisPopulares)

module.exports= router