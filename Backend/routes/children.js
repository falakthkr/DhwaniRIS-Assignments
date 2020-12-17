const express = require("express");
const router = express.Router();
const {getChild, postChild} = require("../controllers/child-controller")

router.get("/", getChild);
router.post("/add", postChild);

module.exports = router;