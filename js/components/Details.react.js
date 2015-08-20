var React = require('react');

var Details = React.createClass({
  render: function(){
    return <div>{this.props.params.id}</div>
  }
});
module.exports = Details;
