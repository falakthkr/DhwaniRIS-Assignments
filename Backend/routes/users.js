const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { loginValidation } = require("../Validation/validator");

const User = require("../models/User");

router.post("/add", async (req, res, next) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const usernameCheck = await User.findOne({ username: req.body.username });
  if (usernameCheck) {
    return res.status(400).send("Username already exists in the database");
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );

  const user = new User({
    username : req.body.username,
    name: req.body.name,
    password: hashedPassword,
    organization : req.body.organization,
    designation : req.body.designation
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).send("Email or password is wrong");
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  res.send("logged in");
});

module.exports = router;