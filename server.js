require("dotenv").config()

const app = require("./api/app");

const { port, url, enviroment } = require("./api/config/serverConfig")

app.listen(port, () => console.log(`server listening on ${enviroment}: ${url}:${port}`))