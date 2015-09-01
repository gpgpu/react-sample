var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher/IamAdminAppDispatcher');

var AppConstants = require('../constants/AppConstants');
var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';

// data to hold in this store
var identities = {};
var currentIdentityId = null;

function deleteIdentity(id){
  delete identities[id];
}

//helpers
function putIdentitiesInStore(identityArray){
  identities = {};
  for (var i = 0; i < identityArray.length; i++){
    var iden = identityArray[i];
    identities[iden.id] = iden;
  }
}

// store
var IdentityStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  getAll: function(){
    return identities;
  },
  getIdentity: function(id){
    return identities[id];
  },


});

Dispatcher.register(function(action){
    switch (action.type){
      case ActionTypes.IDENTITY_DESTORY:
        deleteIdentity(action.id);
        IdentityStore.emitChange();
        break;
      case ActionTypes.RECEIVE_IDENTITIES:
        putIdentitiesInStore(action.identities);
        IdentityStore.emitChange();
        break;
      case ActionTypes.RECEIVE_UPDATED_IDENTITY:
        identities[action.identity.id] = action.identity;
        IdentityStore.emitChange();
        break;
    }
});

module.exports = IdentityStore;
