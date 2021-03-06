var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs 		= require('fs');
var app     = express();
const path = require('path');

var options = {
    uri: 'https://www.autoport.nz/api/service.ashx',
    method: 'POST',
    json: true,
    json: {
      "method": "getvehicles",
      "content-type": "application.json",
    }
  };
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
  app.get('/getvehicles', function(req, res) {
    request(options, function(error, response, body){
      if (!error && response.statusCode == 200) {
          res.send(body);
        }
  
      });
  });
  app.get('/getspecialvehicles', function(req, res) {
    let options2 = options;
    options2.json.method = 'getspecialvehicles';
    request(options2, function(error, response, body){
      if (!error && response.statusCode == 200) {
          res.send(body);
        }
  
      });
  });
app.listen(process.env.PORT || 3000)