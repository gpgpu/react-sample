var Dispatcher = require('../dispatcher/IamAdminAppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  receiveIdentities: function(identities){
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_IDENTITIES,
      identities: identities
    });
  },
  receiveUpdatedIdentity: function(identity){
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_UPDATED_IDENTITY,
      identity: identity
    });
  }
};
