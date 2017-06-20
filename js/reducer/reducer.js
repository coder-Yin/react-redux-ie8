
const actionTypes = require('../actionType');

function isLoading(state = true, action) {
  switch (action.type) {
    case actionTypes.SET_ISLOADING:
      return action.config;
    default:
      return state;
  }
}

function studentList(state = [], action) {
  switch (action.type) {
    case actionTypes.SET_STUDENTLIST:
      return action.config;
    case actionTypes.ADD_STUDENT:
      let newState = [];
      state.push(action.config);
      newState = [...state];
      return newState;
    default:
        return state;
    }
}

function studentGenderType(state = '0', action) {
  switch (action.type) {
    case actionTypes.SET_STUDENTGENDERTYPE:
      return action.config;
    default:
      return state;
  }
}

function enter(state = true, action) {
  switch (action.type) {
    case actionTypes.SET_ENTER:
      return action.config;
    default:
      return state;
  }
}

const reducers = {
  isLoading,
  studentList,
  studentGenderType,
  enter
};

module.exports = reducers;

