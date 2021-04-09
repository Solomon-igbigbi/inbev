const express = require("express");
const app = express()
const authRoute = require("./auth.routes")
const shapeRoute = require("./shapes.routes")

app.use('/api/auth', authRoute)
app.use('/api/shape', shapeRoute)

module.exports = app