const express = require("express");
const router = express.Router();

const studentHandler = require("./handler/student");

router.get("/", studentHandler.getAll);

module.exports = router;
