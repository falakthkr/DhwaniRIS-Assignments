const State = require("../models/state");

const getState = (req, res) => {
  State.find()
    .then((states) => res.json(states))
    .catch((err) => res.status(400).json("Error: " + err));
};

const postState = (req, res) => {
  const name = req.body.name;
  const newState = new State({ name });

  newState
    .save()
    .then(() => res.json("State Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {getState, postState};