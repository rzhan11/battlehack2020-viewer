#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var path = require('path');
var hbs = require('hbs');
var fs = require('fs');

var app = express();


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );

// tell express that the view engine is hbs
app.set('view engine', 'hbs');


// -------------- express endpoint definition -------------- //

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', function(req, res){
    console.log("home anon()");
    res.render("home", {
        "session": req.session,
    });
});

app.get('/viewer', function(req, res){
    console.log("viewer anon()");

    res.render("viewer", {

    });
});

app.get('/', function(req, res){
    console.log("pathing_visualizer anon()");

    res.render("home", {
    });

});

// WILDCARD HANDLERS MUST COME AFTER ALL OTHER EXPLICIT ENDPOINTS
app.get('/:stuff', function(req, res){
    res.render("notfound", {
        "session": req.session,
        "url": req.params.stuff
    });
});

// -------------- listener -------------- //
// The listener is what keeps node 'alive.'

var listener = app.listen(app.get('port'), function() {
  console.log('Express server started on port: '+listener.address().port);
});
