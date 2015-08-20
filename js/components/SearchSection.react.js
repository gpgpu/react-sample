var React = require('react');
var IdentityActionCreators = require('../actions/IdentityActionCreators');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

var SearchSection = React.createClass({
  getInitialState: function(){
    return {
      isAdvancedSearch: false
    };
  },

  onSubmit: function(){
    var netidVal = React.findDOMNode(this.refs.netid).value.trim();
		var pidVal = React.findDOMNode(this.refs.pid).value.trim();
		var afsuidVal = React.findDOMNode(this.refs.afsuid).value.trim();
		var searchParams = {"netid": netidVal, "pid": pidVal, "afsuid": afsuidVal};

		if (this.state.isAdvancedSearch){
			var lastName = React.findDOMNode(this.refs.lastname).value.trim();
			var firstName = React.findDOMNode(this.refs.firstname).value.trim();
			var middleName = React.findDOMNode(this.refs.middlename).value.trim();
			var uuid = React.findDOMNode(this.refs.uuid).value.trim();
			searchParams["lastname"] = lastName;
			searchParams["firstname"] = firstName;
			searchParams["middlename"] = middleName;
			searchParams["uuid"] = uuid;
		}

    IdentityActionCreators.searchIdentities({
      type: ActionTypes.SEARCH_IDENTITIES,
      params: searchParams
    })
  },

  toggleSearchMode: function(){
    this.setState({
      isAdvancedSearch: !this.state.isAdvancedSearch
    });
  },

  render: function(){
    var searchModeButtonText = this.state.isAdvancedSearch? "Basic Search" : "Advanced Search";
    var   advancedSearchElements = (
        <div id="advancedSearchElements">
          <div className="form-group">
            <label for="lastname">Last Name: </label><br />
            <input type="text" className="form-control" ref="lastname" placeholder="Last name" />
          </div>
          <div className="form-group">
            <label for="firstname">First Name: </label><br />
            <input type="text" className="form-control" ref="firstname" placeholder="First name" />
          </div>
          <div className="form-group">
            <label for="middlename">Middle Name: </label><br />
            <input type="text" className="form-control" ref="middlename" placeholder="Middle name" />
          </div>
          <div className="form-group">
            <label for="uuid">UUID: </label><br />
            <input type="text" className="form-control" ref="uuid" placeholder="UUID" />
          </div>
    		</div>
      );
    return (
      <div className="container-fluid">
				<div className="panel panel-primary">
  				<div className="panel-body">
  					<form className="form-inline" id="identity-search">
              <div className="form-group">
                <label for="netid">Net ID: </label><br />
                <input type="text" className="form-control" ref="netid" placeholder="NetID" />
              </div>
              <div className="form-group">
                <label for="pid">PID: </label><br />
                <input type="text" className="form-control" ref="pid" placeholder="PID" />
              </div>
              <div className="form-group">
                <label for="afsuid">AFSUID: </label><br />
                <input type="text" className="form-control" ref="afsuid" placeholder="AFSUID" />
              </div>
            {this.state.isAdvancedSearch? advancedSearchElements : null}
  				<div className="button-group">
  					<button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button> &nbsp;
  					<button type="button" className="btn btn-default" onClick={this.toggleSearchMode}>{searchModeButtonText}</button>
  				</div>
          </form>
  				</div>
				</div>
			</div>
    );
  }
});

module.exports = SearchSection;
