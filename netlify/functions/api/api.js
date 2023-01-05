// Imports
const serverless = require("serverless-http")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

// Config dotenv
dotenv.config()

// Generate token function
function generateAccessToken(username){
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
}

// Initialize express app and express router
const app = express();
const router = express.Router();

// Use CORS
app.use(cors())

// Define routes
router.get("/", (req, res) => {
  res.send(generateAccessToken("testuser"))
})

router.get("/testdata", (req, res) => {
  res.json({ data: "test" })
})

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);