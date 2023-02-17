const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const { connect } = require('./db/db')

require('dotenv').config

const app = express()

app.use(logger("dev"))
app.use(cors())
app.use(express.json())

const guitarrasRouter = require("./router/guitarras")

app.use("/instrumentos/", guitarrasRouter)


connect();
module.exports= app