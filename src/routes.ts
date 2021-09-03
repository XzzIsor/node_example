import * as http from 'http';
import fs from 'fs';

export const requestHandler = (req : http.IncomingMessage, res : http.ServerResponse):void => {
    console.log(req.url, req.method);
        if (req.url === '/') { 
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>')
            res.write('<head><form action="/message" method = "POST" ><input type = "text" name = "message"></input><button>send</button></form></head> ');
            res.write('<body><h1> i\'m in / :) </h1></body>' );
            res.write('</html>');
            return res.end();
        }
    
        if(req.method === 'POST' && req.url ==='/message'){
            const body:any[] = []
            req.on("data", (chunk) => {
                console.log(chunk);
                body.push(chunk);
            });
            req.on("end", () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split("=")[1];
                fs.writeFile("message.txt", message, (err) => {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                });
            });
            return; 
        }
    
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title> Hola SEÑORA </title></head> ');
        res.write('<body><h1> i\'m horny :) </h1></body>' );
        res.write('</html>');
        res.end();
}
