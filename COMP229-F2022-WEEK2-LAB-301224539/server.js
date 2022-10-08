//import express
import express from "express";

const app = express();
function helloWorld(req, res, next) {

    res.setHeader('Content-Type', 'text/plain');
 
    res.end('Hello from NodeJS Application');
 
 };

 function helloNode(req, res, next) {

    res.setHeader('Content-Type', 'text/html');
 
    res.end('<h1>Hello from NodeJS Application as html<h1>');
 
 };

 function helloJson(req, res, next) {

    res.setHeader('Content-Type', 'application/json');
 
    res.end('Hello from NodeJS Application as json');
};
 
 
 
 
 app.use('/hello',helloWorld);
 app.use('/hellonode',helloNode);
 app.use('/json',helloJson);

app.listen(3000);


console.log('Server running at http://localhost:3000/');
console.log('Server running at http://localhost:3000/html');
console.log('Server running at http://localhost:3000/json');