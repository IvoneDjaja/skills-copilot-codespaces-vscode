// Create web server
// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));