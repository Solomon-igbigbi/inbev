const express = require("express");
const app = express();
const routes = require("./routes/index")

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(routes)

app.use(async (req, res) => {
    res.status(404).json({message:`Route not found`})
});

module.exports = app