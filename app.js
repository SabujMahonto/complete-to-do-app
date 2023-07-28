// Basic config Lib Import
const express = require("express");
const router = require("./src/routes/api");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = new express();

// Security Middleware Lib Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const expressMongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const cors = require("cors");

// Database Lib Import
const mongoose = require("mongoose");

// Security Middleware Implement
app.use(express.json());
app.use(
  cors(
    cors({
      credentials: true,
    })
  )
);
app.use(helmet());
app.use(expressMongoSanitize());
app.use(hpp());
app.use(xss());

// body-parser Implement
app.use(bodyParser.json());

//Request Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Mongo DB Database Connection

let uri = process.env.MONGO_URI;
mongoose.connect(uri, { useUnifiedTopology: true });

// Routing Implement
app.use("/api/v1", router);

// Undefine routing implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "Not Found" });
});

module.exports = app;
