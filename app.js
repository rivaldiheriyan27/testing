"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
var os = require("os");
const path = require("path");
const router = require("./router");
const bodyParser = require("body-parser");
// const { decryptMobile } = require("./helpers/utility");
const http = require("http");
const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {},
// });
// app.use(cors());

// no mount path; executed for every request.
app.use(function (req, res, next) {
  res.set("Access-Control-Expose-Headers", "X-Served-By");
  // res.set('X-Served-By', process.env.CONTAINER_NAME);
  res.set("X-Served-By", os.hostname);
  next();
});
// app.use( bodyParser.json({limit: '50mb'}) );
// app.use(bodyParser.urlencoded({
//   limit: '50mb',
//   extended: true,
//   parameterLimit:50000
// }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(bodyParser({limit: '50mb'}));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
// app.use((req, res, next) => {
//   res.io = io;
//   next();
// });
app.use("/", router);

module.exports = app;
