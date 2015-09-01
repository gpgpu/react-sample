var React = require('react');
var IdentityActionCreators = require('../actions/IdentityActionCreators');
var Details = require('./Details.react');
var Link = require('react-router').Link;

var IdentityItem = React.createClass({
  onDeleteClick: function(){
    if (confirm("Are you sure to delete this identity?")){
      IdentityActionCreators.deleteIdentity(this.props.identity.id);
    }
  },
  render: function(){
    var identity = this.props.identity;
    var detailsUrl = '/identities/' + identity.id;

    var status = "active";
    if (identity.status == 2) status = "disabled";
    if (identity.status == 3) status = "locked";

    return (

      <tr>
        <td><Link to={detailsUrl}>{identity.id}</Link></td>
        <td><Link to={detailsUrl}>{identity.name}</Link></td>
        <td>{status}</td>
        <td className="actionColumn"><button className="delete" onClick = {this.onDeleteClick}></button></td>
      </tr>
    );
  }
});

module.exports = IdentityItem;
