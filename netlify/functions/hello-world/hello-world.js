// Imports
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")

// Initialize app
const app = express()

// Create routes
app.get("/", (req, res) => {
  res.send("Success!")
})

module.exports = { app }
