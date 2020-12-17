const express = require("express");
const router = express.Router();
const {getDistrict, postDistrict} = require("../controllers/district-controller")

router.get("/", getDistrict);
router.post("/add", postDistrict);

module.exports = router;