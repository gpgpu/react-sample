var data = {

};
data["1"] = {"id": 1, "name": "joe 1", "status": 1};
data["2"] = {"id": 2, "name": "joe 2", "status": 2};
data["3"] = {"id": 3, "name": "joe 3", "status": 3};
data["4"] = {"id": 4, "name": "joe 4", "status": 1};
data["5"] = {"id": 5, "name": "joe 5", "status": 1};
data["6"] = {"id": 6, "name": "joe 6", "status": 1};
data["7"] = {"id": 7, "name": "joe 7", "status": 1};
data["8"] = {"id": 8, "name": "joe 8", "status": 1};

function getIdentities(){
  var result = [];
  for (var id in data){
    result.push(data[id]);
  }
  return result;
}

function updateIdentity(identity){
  data[identity.id] = identity;
}

module.exports = {
  getIdentities: getIdentities,
  updateIdentity: updateIdentity
};
