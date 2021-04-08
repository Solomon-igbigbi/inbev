const express = require("express");
const app = express()
const authRoute = require("./auth.routes")

app.use('/api/auth', authRoute)

module.exports = app