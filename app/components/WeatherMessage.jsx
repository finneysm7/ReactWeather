var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.state;
    return (
        <p>It's {temp} in {location}</p>
    );
  }
});

module.exports = WeatherMessage;
