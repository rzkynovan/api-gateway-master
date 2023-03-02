var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

var indexRouter = require("./routes/index");
var teacherRouter = require("./routes/teachers");
var studentRouter = require("./routes/students");
var karyawanRouter = require("./routes/karyawan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", indexRouter);
app.use("/teachers", teacherRouter);
app.use("/students", studentRouter);
app.use("/karyawan", karyawanRouter);

module.exports = app;
