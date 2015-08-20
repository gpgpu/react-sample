var React = require('react');
var IdentityActionCreators = require('../actions/IdentityActionCreators');

var IdentityItem = React.createClass({
  onDeleteClick: function(){
    if (confirm("Are you sure to delete this identity?")){
      IdentityActionCreators.deleteIdentity(this.props.identity.id);
    }
  },
  render: function(){
    var identity = this.props.identity;

    return (
      <tr>
        <td>{identity.id}</td>
        <td>{identity.name}</td>
        <td className="actionColumn"><button className="delete" onClick = {this.onDeleteClick}></button></td>
      </tr>
    );
  }
});

module.exports = IdentityItem;
