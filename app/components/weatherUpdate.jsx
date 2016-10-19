var React = require('react');

var WeatherUpdate  = React.createClass({
  render:function (){
    var {temp,location} = this.props;
    return (
      <p>Its {temp}c in {location}</p>
    );
  }
});

module.exports = WeatherUpdate;
