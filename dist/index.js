"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var next_1 = __importDefault(require("next"));
var dev = process.env.NODE_ENV !== 'production';
var app = next_1.default({ dev: dev });
var handle = app.getRequestHandler();
var port = process.env.PORT || 3000;
app.prepare().then(function () {
    var server = express_1.default();
    server.all('*', function (req, res) {
        return handle(req, res);
    });
    server.listen(port, function (err) {
        if (err)
            throw err;
        console.log("> Ready on localhost:" + port + " - env " + process.env.NODE_ENV);
    });
});
