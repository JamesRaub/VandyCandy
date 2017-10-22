/* Copyright G. Hemingway @2017 - All rights reserved */
"use strict";

// Import the needed external modules
let path        = require('path'),
    express     = require('express'),
    logger      = require('morgan'),
    bodyParser  = require('body-parser');

let port = process.env.PORT ? process.env.PORT : 80;
let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

/**********************************************************************************************************/

// Setup our Express pipeline
let app = express();
if (env !== 'test') app.use(logger('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"));
})

/**********************************************************************************************************/

// Run the server itself
let server = app.listen(port, () => {
    console.log('Example app listening on ' + server.address().port);
});