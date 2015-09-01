var React = require('react');
var classNames = require('classnames');
var IdentityStore = require('../stores/IdentityStore');
var IdentityActionCreators = require('../actions/IdentityActionCreators');
var Link = require('react-router').Link;

var Details = React.createClass({
  getInitialState: function(){

    return({
      identityId: this.props.params.id,
      identity: IdentityStore.getIdentity(this.props.params.id),
      hasError: false
    });
  },
  onUpdate: function(e){
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value;
    var status = React.findDOMNode(this.refs.status).value;

    // validate. this will be refactored into store, where server side
    // validation can be combined.
    if (name.indexOf('joe') !== 0){
      this.setState({hasError: true});
      return false;
    }
    var iden = {}
    iden.id = this.state.identityId;
    iden.name = name;
    iden.status = status;

    IdentityActionCreators.updateIdentity(iden);
    window.location.href="/#/identities";
  },

  render: function(){

    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-sm-2" for="netid">Net ID:</label>
          <div className="col-sm-5">
            {this.state.identityId}
          </div>
        </div>
        <div className={classNames({'form-group': true, 'has-error': this.state.hasError})}>
          <label className="control-label col-sm-2" for="name">Name:</label>
          <div className="col-sm-5">
            <input type="text" className="form-control" ref="name" placeholder="name" defaultValue={this.state.identity.name} />
            {this.state.hasError? <div className="error">Name must starts with joe</div> : null}
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="status">Status:</label>
          <div className="col-sm-5">
            <select class="form-control" defaultValue={this.state.identity.status} ref="status">
              <option value="1">Active</option>
              <option value="2">Disabled</option>
              <option value="3">Locked</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="button" className="btn btn-default" value="Update" onClick={this.onUpdate} />
            <Link className="btn btn-default" to="identities">Cancel</Link>
          </div>
        </div>
      </form>
    );
  }
});
module.exports = Details;
