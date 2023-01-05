// Imports
const serverless = require("serverless-http")
const jwt = require("jsonwebtoken")
const express = require("express")
const dotenv = require("dotenv")
const https = require("https")
const cors = require("cors")

// Config dotenv
dotenv.config()

// Generate token function
function generateAccessToken(info){
  return jwt.sign(info, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
}

// Initialize express app and express router
const app = express();
const router = express.Router();

// Use CORS
app.use(cors())

// Define routes
router.get("/", (req, res) => {
  res.send("test")
})

router.get("/testdata", (req, res) => {
  res.send("test")
})

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);