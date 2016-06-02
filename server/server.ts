/// <reference path="./typings/main.d.ts"/>

import express = require("express");
let config = require("../config");
import path = require("path");
let app = express();



// Other requests to client
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../client/index.html"));
});

let server = app.listen(config.port || 3000, function () {
  let host: string = server.address().address;
  let port: number = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
