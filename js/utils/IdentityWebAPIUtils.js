var request = require('superagent');
var ServerActionCreators = require('../actions/ServerActionCreators');

module.exports = {
  getIdentities: function(searchParams){
    var queryString = "?";
    for (var param in searchParams){
      console.log(param + ": " + searchParams[param]);
      queryString += param + "=" +searchParams[param] + "&";
    }
    queryString = queryString.substr(0, queryString.length -1);
  //  var url = "entity.json" + queryString;

   var url = "http://localhost:8989/identities" + queryString;

    request
      .get(url)
      .end(function(err, res){
        ServerActionCreators.receiveIdentities(res.body);
      });
  },

  saveIdentity: function(identity){
    // it's just a valid url for doing nothing in thsi scenario
    // it should be a post instead of get,
    // we just mimic the operations here with webpack dev server.
    request
      .put('http://localhost:8989/identities/' + identity.id)
      .send(identity)
      .end(function(err, res){
        ServerActionCreators.receiveUpdatedIdentity(identity);
      });
  }
};
