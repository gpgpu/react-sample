var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Main = require('./components/Main.react');
var IdentitySection = require('./components/IdentitySection.react');
var ChangePasswordSection = require('./components/ChangePasswordSection.react');
var Details = require('./components/Details.react');
var AboutUs = require('./components/AboutUs.react');

var App = React.createClass({
  render: function(){
    return (
      <div className="container container-box">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to={'/home'} className="navbar-brand">IAM Admin</Link>
            </div>
            <div>
              <ul className="nav navbar-nav">
          			<li><Link to={'/identities'}>Identities</Link></li>
          			<li><Link to={'/changepassword'}>Change Password</Link></li>
          			<li><Link to={'/aboutus'}>About Us</Link></li>
          		</ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid" id="hello">
            <RouteHandler />
        </div>
      </div>
    );
  }
});

var routes = (
  <Route handler={App} >
    <Route path="home" handler={Main} />
    <Route path="identities" handler={IdentitySection} />
    <Route path="identities/:id" handler={Details} />
    <Route path="changepassword" handler={ChangePasswordSection} />
    <Route path="aboutus" handler={AboutUs} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) =>{
  React.render(<Root />, document.getElementById('content'));
});
