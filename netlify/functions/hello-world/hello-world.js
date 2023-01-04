// Imports
const serverless = require("serverless-http")
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")

// Initialize app
const app = express()
const router = express.Router()
app.use(cors())
app.use(bodyParser)

// Create routes
router.get("/", (req, res) => {
  res.json({ message: "Success!"})
})

app.use("/.netlify/functions/hello-world", router)

module.exports.handler = serverless(app)
