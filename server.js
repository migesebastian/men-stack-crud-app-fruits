// server.js

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");

// Connect to MongoDB using the connection string in the .env file
mongoose.connect(process.env.MONGODB_URI);

const app = express();

mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });
  
  
 