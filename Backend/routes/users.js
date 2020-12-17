const express = require("express");
const router = express.Router();
const {getUser, postUser} = require("../controllers/user-controller")

router.get("/", getUser);
router.post("/add", postUser);

module.exports = router;