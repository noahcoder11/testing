// Imports
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")

// Initialize app
const app = express()
app.use(cors())

// Create routes
app.get("/", (req, res) => {
  res.send("Success!")
})

exports.handler = app
