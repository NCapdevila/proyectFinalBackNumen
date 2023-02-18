const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const { connect } = require('./db/db')

require('dotenv').config

const app = express()

app.use(logger("dev"))
app.use(cors())
app.use(express.json())

const guitarrasRouter = require("./routes/guitarras")
const pokeRouter = require('./routes/apiExterna')

app.use("/instrumentos/", guitarrasRouter)
app.use("/api/", pokeRouter)

connect();
module.exports= app