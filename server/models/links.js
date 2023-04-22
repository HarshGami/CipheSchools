const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      linkedin: { type: String },
      github: { type: String },
      facebook: { type: String },
      twitter: { type: String },
      insta: { type: String },
      website: { type: String },
    },
    { collection: "user-links" }
  );
  
  const linksmodel = mongoose.model("user-links", User);
  module.exports = linksmodel;