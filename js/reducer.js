const {combineReducers} = require('redux');
const reducers = require('./reducer/reducer');

const rootReducer = combineReducers({
    ...reducers
})

module.exports = rootReducer;
