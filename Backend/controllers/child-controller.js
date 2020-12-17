const Child = require("../models/child");

const getChild = (req, res) => {
  Child.find()
    .then((children) => res.json(children))
    .catch((err) => res.status(400).json("Error: " + err));
};

const postChild = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const newChild = new Child({ name, age });

  newChild
    .save()
    .then(() => res.json("Child Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {getChild, postChild};