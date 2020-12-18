const User = require("../models/user");

const getUser = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

const postUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const organization = req.body.organization;
  const designation = req.body.designation;
  const newUser = new User({ username, password, name, organization, designation });

  newUser
    .save()
    .then(() => res.json("User Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {getUser, postUser};