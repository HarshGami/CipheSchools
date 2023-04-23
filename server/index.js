const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const prfileroute = require("./router/profileroute.js");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/profile", prfileroute);

app.listen("5000", () => {
  console.log("server starting");
});
