var Dispatcher = require('../dispatcher/IamAdminAppDispatcher');
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
    Dispatcher.dispatch({
      type: ActionTypes.SEARCH_IDENTITIES,
      params: params
    });
  }
};
