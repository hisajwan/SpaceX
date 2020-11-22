import { combineReducers } from "redux";
import launchData from "./launchData";

const rootReducer = combineReducers({
  launchData: launchData,
});

export default rootReducer;
