const express = require("express");
const router = express.Router();

const karyawanHandler = require("./handler/karyawan");

router.get("/", karyawanHandler.getAll);

module.exports = router;
