const aboutmodel = require("../models/about");
const linksmodel = require("../models/links");

exports.addabout = async (req, res) => {
  try {
    const user = await aboutmodel.findOne({
      email: req.body.email,
    });

    if (user) {
      await aboutmodel.updateOne(
        {
          email: req.body.email,
        },
        {
          $set: {
            about: req.body.about,
          },
        }
      );
      res.json({ status: "ok", message: "updated successfilly" });
    } else {
      await aboutmodel.create({
        email: req.body.email,
        about: req.body.about,
      });
      res.json({ status: "ok", message: "added successfilly" });
    }
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};

exports.getabout = async (req, res) => {
  try {
    const user = await aboutmodel.findOne({
      email: req.body.email,
    });

    if (user) {
      res.json({ status: "ok", about: user.about });
      return;
    }
    res.json({ status: "ok", about: "" });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};

exports.addlinks = async (req, res) => {
  const { linkedin, github, facebook, twitter, insta, website } =
    req.body.links;

  try {
    const user = await linksmodel.findOne({
      email: req.body.email,
    });

    if (user) {
      await linksmodel.updateOne(
        {
          email: req.body.email,
        },
        {
          $set: {
            linkedin,
            github,
            facebook,
            twitter,
            insta,
            website,
          },
        }
      );
      res.json({ status: "ok", message: "updated successfilly" });
    } else {
      await linksmodel.create({
        email: req.body.email,
        linkedin,
        github,
        facebook,
        twitter,
        insta,
        website,
      });
      res.json({ status: "ok", message: "added successfilly" });
    }
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};

exports.getlinks = async (req, res) => {
  try {
    const user = await linksmodel.findOne({
      email: req.body.email,
    });

    if (user) {
      const links = {
        linkedin: user.linkedin,
        github: user.github,
        facebook: user.facebook,
        twitter: user.twitter,
        insta: user.insta,
        website: user.website,
      };
      res.json({ status: "ok", links });
      return;
    }
    res.json({
      status: "ok",
      links: {
        linkedin: "",
        github: "",
        facebook: "",
        twitter: "",
        insta: "",
        website: "",
      },
    });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};
