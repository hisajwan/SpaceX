import { LAUNCH_DATA_ASYNC } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LAUNCH_DATA_ASYNC:
      return action.payload;
    default:
      return state;
  }
}
