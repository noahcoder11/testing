// Imports
const serverless = require("serverless-http")
const jwt = require("jsonwebtoken")
const express = require("express")
const dotenv = require("dotenv")
const https = require("https")
const cors = require("cors")
const { response } = require("express")

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


async function searchBooks(searchString){
  var _json = {}

  await https.get(`https://www.googleapis.com/books/v1/volumes?q=${searchString}`, (resp) => {
    let data = ''

    resp.on('data', (chunk) => {
      data += chunk;
    })

    resp.on('end', () => {
      _json = JSON.parse(data)
    })
  })

  return json
}

// Define routes
router.get("/", (req, res) => {
  res.send("test")
})

router.get("/search/:searchString", (req, res) => {
  json_data = searchBooks(req.params.searchString)
  res.json(json_data)
})

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);