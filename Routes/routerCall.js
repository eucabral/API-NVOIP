const express = require("express");
const router = express.Router();

const callController = require("../Controllers/callController");
router.post("/", callController.call1);

module.exports = router;
