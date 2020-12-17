const District = require("../models/district");

const getDistrict = (req, res) => {
  District.find()
    .then((districts) => res.json(districts))
    .catch((err) => res.status(400).json("Error: " + err));
};

const postDistrict = (req, res) => {
  const name = req.body.name;
  const state = req.body.state;
  const newDistrict = new District({ name, state });

  newDistrict
    .save()
    .then(() => res.json("District Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {getDistrict, postDistrict};