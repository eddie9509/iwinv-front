const express = require("express");

const app = express();

app.use(express.json()); //* 요청 메소드의 json 파일을 읽을 목적

const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.listen(3000, function () {
  console.log("start! express server on port 3000");
});

app.get("/zz", function (req, res) {
  console.log("test success");
  res.send("zz");
});
app.get("", function (req, res) {
  console.log("html send");
  res.sendFile(__dirname + "/main.html");
});
