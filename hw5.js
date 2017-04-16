// Scott Nedvesky
// Web API CSCI 3800
// HW4 - The purpose of this assignment is to store information about movies and create a proxy with a Node.js server to interact with the apigee backend service

var express = require('express');
var app = express();


var util = require('util');
var usergrid = require('usergrid');
var client = new usergrid.client({
	URI: 'https://apibass-trial.apigee.net',
	orgName: 'scottnedvesky'
	appName: 'sandbox'
	logging: true,

	});


	function callback(error, data) {
		if (!error) {
			res.json(data);
			}
	}


app.listen(8080, function() {
    var p1 = server.address().port
    var h1 = server.address().address
    console.log("Server running on http://%s:%s", h1, p1)
})
