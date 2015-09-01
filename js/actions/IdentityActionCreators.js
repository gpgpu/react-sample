var Dispatcher = require('../dispatcher/IamAdminAppDispatcher');
var IdentityWebAPIUtils = require('../utils/IdentityWebAPIUtils');
var AppConstants = require('../constants/AppConstants');
var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  deleteIdentity: function(id){
    Dispatcher.dispatch({
      type: ActionTypes.IDENTITY_DESTORY,
      id: id
    });
  },

  searchIdentities: function(params){
    IdentityWebAPIUtils.getIdentities(params);
  },

  updateIdentity: function(identity){
    IdentityWebAPIUtils.saveIdentity(identity);
  }
};
