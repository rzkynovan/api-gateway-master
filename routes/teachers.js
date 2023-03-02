const express = require("express");
const router = express.Router();

const teacherHandler = require("./handler/teacher");

router.get("/", teacherHandler.getAll);

module.exports = router;
