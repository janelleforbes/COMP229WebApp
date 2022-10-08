//import express
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from 'express-session';

import path, {dirname} from 'path';
import { fileURLToPath } from "url";
//get path from application and translate to dirname
const_dirname = dirname{fileURLToPath(import.meta.url)};

const app = express();

//setup ViewEnginer EJS
app.set('views', path.join)(__dirname, '/views');
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Use Routes
app.use('/', indexRouter);


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