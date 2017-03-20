var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a web application built with React.js. I built this for The Complete React Web Developer Course.</p>
      <p>Here is some info about this page:</p>
      <ul>
        <li>
          This weather app uses the <a target="_blank" href="http://openweathermap.org/api">open weather map</a> api
        </li>
        <li>
          The github repo for this site can be found <a target="_blank" href="https://github.com/finneysm7/ReactWeather">here</a>
        </li>
        <li>
          This weather app created with love by <a target="_blank" href="http://seanmcgowanfinney.com">Sean Finney</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
