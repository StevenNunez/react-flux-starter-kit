'use strict';

var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for fast stuff</p>
      </div>
    );
  }
}

// var Home = React.createClass({
//   render: function(){
//     return <div>Hello, World</div>;
//   }
// })

module.exports = Home;
