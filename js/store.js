const rootReducer = require('./reducer');
const {createStore, applyMiddleware, compose} = require('redux');
const thunk = require('redux-thunk');

// new
// import Immutable from 'immutable';
// const state = Immutable.fromJS({});
// const store = rootReducer(state);
// export default createStore(reducer, store);

//old
const finalCreateStore = compose(applyMiddleware(thunk))(createStore);
module.exports = finalCreateStore(rootReducer);
