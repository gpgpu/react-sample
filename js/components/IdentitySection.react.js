var React = require('react');
var IdentityStore = require('../stores/IdentityStore');
var SearchSection = require('./SearchSection.react');
var IdentityItem = require('./IdentityItem.react');

var RouteHandler = require('react-router').RouteHandler;

function getStateFromStore(){
  return {
    identities: IdentityStore.getAll()
  };
}

var IdentitySection = React.createClass({
  getInitialState: function(){
    return getStateFromStore();
  },
  componentDidMount: function(){
    IdentityStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function(){
    IdentityStore.removeChangeListener(this.onChange);
  },

  onChange: function(){
    this.setState(getStateFromStore());
  },

  render: function(){
    var items = [];
    var allIdentities = this.state.identities;
    for (var key in allIdentities){
      items.push(<IdentityItem identity={allIdentities[key]} />);
    }

    var table = null;
    if (items && items.length > 0){
      table = (
        <table id="identity-list" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>&nbsp;</th>
            </tr>
            <tbody>
              {items}
            </tbody>
          </thead>
        </table>
      );
    }
    return (
      <div className="container-fluid">
        <SearchSection />
        {table}

      </div>
    );
  }
});
module.exports = IdentitySection;
