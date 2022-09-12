import { combineReducers } from 'redux';
import serviceListReducer from "./serviceListReducer";
import dateEventsReducer from "./dateEventsReducer";

const rootReducer = combineReducers({
  serviceList: serviceListReducer,
  dateEvents: dateEventsReducer
});

export default rootReducer;
