const express = require("express");
const app = express();

// const fs = require("fs");
// const Https = require("https");

// const options = {
//   // letsencrypt로 받은 인증서 경로를 입력
//   ca: fs.readFileSync("/etc/letsencrypt/live/consumersquare.kr/fullchain.pem"),
//   key: fs.readFileSync("/etc/letsencrypt/live/consumersquare.kr/privkey.pem"),
//   cert: fs.readFileSync("/etc/letsencrypt/live/consumersquare.kr/cert.pem"),
// };

// Https.createServer(options, app).listen(443);

app.use(function (req, res, next) {
  if (!req.secure) {
    res.redirect("https://" + "consumersquare.kr" + req.url);
  } else {
    next();
  }
});

app.use(express.json()); //* 요청 메소드의 json 파일을 읽을 목적

app.use(express.static("public"));

const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.listen(80, function () {
  console.log("start! express server on port 80");
});

app.get("/zz", function (req, res) {
  console.log("test success");
  res.send("zz");
});
app.get("", function (req, res) {
  console.log("html send");
  res.sendFile(__dirname + "/main.html");
});
