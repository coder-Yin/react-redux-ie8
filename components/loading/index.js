const React = require('react');
const {Component} = require('react');
class Loading extends Component {

    render() {
      return(
          <div className="loading">
            <div className="bg"></div>
            <div className="content">Loading...</div>
          </div>
      )
    }
}

module.exports = Loading;
