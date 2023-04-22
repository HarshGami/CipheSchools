const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    about: { type: String },
  },
  { collection: "user-about" }
);

const aboutmodel = mongoose.model("user-about", User);
module.exports = aboutmodel;
