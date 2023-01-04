// Imports
const serverless = require("serverless-http")
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")

// Initialize app
const app = express()
app.use(cors())
app.use(bodyParser)

// Create routes
app.get("/", (req, res) => {
  res.json({ message: "Success!"})
})

module.exports.handler = serverless(app)
