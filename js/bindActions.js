const store = require('./store.js');
const {bindActionCreators} = require('redux');
const actions = require('./action');

let {dispatch} = store;

// const actionsCreators = 

module.exports = bindActionCreators({
    ...actions
}, dispatch);;
