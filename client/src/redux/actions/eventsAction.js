import {
  GET_TODAY, ADD_EVENT, DELETE_EVENT, UPDATE_EVENT
} from '../types/service.type';

export const getToday = (payload) => ({
  type: GET_TODAY,
  payload
});
export const addEvent = (payload) => ({
  type: ADD_EVENT,
  payload
});
export const deleteEvent = (payload) => ({
  type: DELETE_EVENT,
  payload
});
export const updateEvent = (payload) => ({
  type: UPDATE_EVENT,
  payload
});

export const getTodayThunk = (events) => async (dispatch) => {
  dispatch(getToday(events));
};

export const addEventThunk = (event) => async (dispatch) => {
  dispatch(addEvent(event));
};
export const updateEventThunk = (event) => async (dispatch) => {
  dispatch(updateEvent(event));
};
export const deleteEventThunk = (event) => async (dispatch) => {
  dispatch(deleteEvent(event));
};
