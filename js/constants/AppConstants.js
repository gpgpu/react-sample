var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    IDENTITY_DESTORY: null,
    SEARCH_IDENTITIES: null,
    RECEIVE_IDENTITIES: null,
    UPDATE_IDENTITY: null,
    RECEIVE_UPDATED_IDENTITY: null
  })
};
