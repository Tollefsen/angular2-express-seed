/// <reference path="./typings/main.d.ts"/>
"use strict";
var express = require("express");
var config = require("../config");
var app = express();
// Other requests to client
app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname + "/../../client/index.html"));
});
var server = app.listen(config.port || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
//# sourceMappingURL=server.js.map