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
  }
});

Dispatcher.register(function(action){
    switch (action.type){
      case ActionTypes.IDENTITY_DESTORY:
        deleteIdentity(action.id);
        IdentityStore.emitChange();
        break;
      case ActionTypes.SEARCH_IDENTITIES:
        var ident1 = {};
        ident1.id = "1";
        ident1.name="number 1";
        var ident2 = {};
        ident2.id = "2";
        ident2.name="number 2";

        identities[ident1.id] = ident1;
        identities[ident2.id] = ident2;

        IdentityStore.emitChange();
        break;
    }
});

module.exports = IdentityStore;
