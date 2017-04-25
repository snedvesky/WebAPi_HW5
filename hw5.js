// Scott Nedvesky
// Web API CSCI 3800
// HW5 - The purpose of this assignment is to leverage Apigee’s analytics policies to gather information about the requests being sent in by users

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

// GETs
app.get('/gets', function(req, res){
    if (req.method === 'GET') if (Object.keys(req.query).length > 0) {
        res.send(req.query);
    } else {
        res.send('Nothing Sent in');
    }
});

// POSTs
app.post('/posts', function (req, res) {
    if (req.method === 'POST') if (Object.keys(req.query).length > 0) {

        var title = request_data.title;
        var year = 	request_data.year;
        var cast = 	request_data.cast;

            // Create New Object
            var tmp = {};

            // Set tmp parameters
            tmp.title = title;
            tmp.year = year;
            tmp.cast = cast;

            req.content = JSON.stringify(tmp);
        }
    } else {
        res.send('Nothing Sent In');
    }
});


// DELETE
app.delete('/deletes', function (req, res) {
    if (req.method === 'DELETE') if (Object.keys(req.query).length > 0) {
        res.send(req.query);
    } else {
        res.send('Nothing Sent in');
    }
});

//  Base URL Request Rejection
app.all('/', function (req, res) {
    res.status(403).send('Rejected: URN Not Specified');
});

//  404 Errors
app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }
    res.send(err.message || ' nada ');
});

app.listen(8080, function() {
    var p1 = server.address().port
    var h1 = server.address().address
    console.log("Server running on http://%s:%s", h1, p1)
})
