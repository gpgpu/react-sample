var express = require('express');
var bodyParser = require('body-parser');

var db = require('./data');

var app = express();

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  next();
});
app.use(bodyParser.json());

app.get('/identities', function(req, res){
  var identities = db.getIdentities();

  var qs = req.query;
  console.log(qs.netid);
  console.log(typeof qs.netid)
  var netid = qs.netid;

  var resultSet  = [];
  if (!netid || netid == ''){
    resultSet = identities;
  }
  else{
    var resultSet = identities.filter(function(identity){
        return identity.id == netid;
    });
  }

  res.send(resultSet);
});
app.put('/identities/:id', function(req, res){
  console.log(req.params.id);
  console.log(req.body);
  
  var identity = req.body;
  db.updateIdentity(identity);

  res.send(res.body);
});

app.get('/qs', function(req, res){
  res.send(req.query);
});

app.listen(8989);
