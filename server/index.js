const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO || "mongodb://localhost:27017/cipherschool");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen("5000", () => {
  console.log("srever starting");
});
