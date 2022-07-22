import { countersActionTypes } from "../actions/countersActions";

const intialState = {
  counter: 0
}

export default function countersReducer(state = intialState, action) {
  switch(action.type) {
    case countersActionTypes.INCREMENT:
      return { counter: state.counter + 1 };
    case countersActionTypes.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};