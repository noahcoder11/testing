// Imports
const serverless = require("serverless-http")
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")

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
  res.json({ data: "test" })
})

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);

/*app.listen(3000, () => {
  console.log(
    `Server running on port 3000`
  );
});*/
