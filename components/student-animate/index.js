const React = require('react');
const {Component} = require('react');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class StudentAnimate extends Component {


  render() {
    let { enter, toggleEnter } = this.props
    return(
      <div>
        <div>
          <button type="button" onClick={toggleEnter}>切换</button>
        </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}>
        {
          enter ?

            <div style={{width: '100px',height: '100px',backgroundColor: '#f00'}}></div>
           : null
        }
        </ReactCSSTransitionGroup>

      </div>
    )
  }
}
