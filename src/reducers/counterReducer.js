import * as actionType from "../actions/ActionType";

const counterReducer = (state = 121, action) => {
  let newState;
  switch (action.type) {
    case actionType.ADD_COUNTER:
      return (newState = state + action.payload);
    case actionType.REMOVE_COUNTER:
      return (newState = state - action.payload);
    default:
      return state;
  }
};

export default counterReducer;
