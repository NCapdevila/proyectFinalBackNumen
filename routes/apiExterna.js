const express = require('express')
const router = express.Router()
const Controller = require('../controller/apiExternaController')

router.get("/poke", Controller.consultaAxios)

module.exports= router