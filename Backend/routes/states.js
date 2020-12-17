const express = require("express");
const router = express.Router();
const {getState, postState} = require("../controllers/state-controller")

router.get("/", getState);
router.post("/add", postState);

module.exports = router;