var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-sm-2" for="netid">Net ID:</label>
          <div className="col-sm-5">
            <input type="text" className="form-control" id="netid" placeholder="net id" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="oldpassword">Old Password:</label>
          <div className="col-sm-5">
            <input type="password" className="form-control" id="oldpassword" placeholder="old password" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="newpassword1">New Password:</label>
          <div className="col-sm-5">
            <input type="password" className="form-control" id="newpassword1" placeholder="new password" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="newpassword2">New Password Again:</label>
          <div className="col-sm-5">
            <input type="text" className="form-control" id="newpassword2" placeholder="new password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" className="btn btn-default" value="Submit" />
          </div>
        </div>
      </form>
    );
  }
})
