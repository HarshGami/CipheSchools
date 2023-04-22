const express = require("express");
const { addabout, getabout ,addlinks,getlinks,addprofessional,getprofessional} = require("../controllers/profile.js");

const prfileroute = express.Router();

prfileroute.route("/addabout").post(addabout);
prfileroute.route("/getabout").post(getabout);
prfileroute.route("/addlinks").post(addlinks);
prfileroute.route("/getlinks").post(getlinks);
prfileroute.route("/addprofessional").post(addprofessional);
prfileroute.route("/getprofessional").post(getprofessional);

module.exports = prfileroute;
