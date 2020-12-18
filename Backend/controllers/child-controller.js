const Child = require("../models/child");
const fs = require("fs")

const getChild = (req, res) => {
  Child.find()
    .then((children) => res.json(children))
    .catch((err) => res.status(400).json("Error: " + err));
};

const postChild = (req, res) => {
  const name = req.body.name;
  const sex = req.body.sex;
  const dob = req.body.dob;
  const father = req.body.father;
  const mother = req.body.mother;
  const state = req.body.state;
  const district = req.body.district;
  const avatar = req.body.avatar;
  const newChild = new Child({ name, sex, dob, father, mother, state, district, avatar });

  newChild
    .save()
    .then(() => res.json("Child Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {getChild, postChild};