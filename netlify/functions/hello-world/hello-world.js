const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("test")
});


app.use("/.netlify/functions/hello-world", router);

module.exports.handler = serverless(app);