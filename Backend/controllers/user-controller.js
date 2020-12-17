const User = require("../models/user");

const getUser = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

const postUser = (req, res) => {
  const name = req.body.name;
  const newUser = new User({ name });

  newUser
    .save()
    .then(() => res.json("User Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {getUser, postUser};