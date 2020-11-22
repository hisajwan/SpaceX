import { LAUNCH_DATA } from "./types";

export const launchDataAction = url => ({
  type: LAUNCH_DATA,
  payload: url
});