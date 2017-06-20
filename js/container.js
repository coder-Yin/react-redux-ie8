const React = require('react');
const {Component} = require('react');
const {connect} = require('react-redux');
const {mapStateToProps, mapDispatchToProps} = require('./param');
const TodoDetail = require('../components/todo-detail/');

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <TodoDetail {...this.props} />;
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Container);
