"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestHandler = void 0;
var fs_1 = __importDefault(require("fs"));
var requestHandler = function (req, res) {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><form action="/message" method = "POST" ><input type = "text" name = "message"></input><button>send</button></form></head> ');
        res.write('<body><h1> i\'m in / :) </h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (req.method === 'POST' && req.url === '/message') {
        var body_1 = [];
        req.on("data", function (chunk) {
            console.log(chunk);
            body_1.push(chunk);
        });
        req.on("end", function () {
            var parsedBody = Buffer.concat(body_1).toString();
            var message = parsedBody.split("=")[1];
            fs_1.default.writeFile("message.txt", message, function (err) {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        return;
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Hola SEÑORA </title></head> ');
    res.write('<body><h1> i\'m horny :) </h1></body>');
    res.write('</html>');
    res.end();
};
exports.requestHandler = requestHandler;
