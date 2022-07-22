import { combineReducers } from "redux";
import countersReducer from "./countersReducers";

const rootReducer = combineReducers({
  counters: countersReducer
});

export default rootReducer;