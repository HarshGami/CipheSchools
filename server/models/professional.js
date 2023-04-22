const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    current: { type: String },
    edu: { type: String },
  },
  { collection: "user-professional" }
);

const professionalmodel = mongoose.model("user-professional", User);
module.exports = professionalmodel;
