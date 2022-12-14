 /*
 COMP229 Assign 1
 Janelle-Nicole Forbes
 301224539
 October 8, 2022
 */
//import express
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from 'express-session';

import path, {dirname} from 'path';

import { fileURLToPath } from 'url';
//get path from application and translate to dirname

const __dirname = dirname(fileURLToPath(import.meta.url));

//Import router
import indexRouter from '../app/routes/index.route.server.js';



const app = express();

//setup ViewEnginer EJS
app.set('views', path.join)(__dirname, '/views');
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
//parent public folder
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Use Routes
app.use('/', indexRouter);
//linking indexrouter to external application


/*
app.listen(3000);


console.log('Server running at http://localhost:3000/');
*/

//export instance
export default app;