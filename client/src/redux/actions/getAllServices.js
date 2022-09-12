import { GET_SERVICES, GET_ERROR } from '../types/service.type';

export const getServices = (payload) => ({
  type: GET_SERVICES,
  payload
});
export const getError = (payload) => ({
  type: GET_ERROR,
  payload
});

export const getServicesThunk = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:7070/api/services');
    const data = await response.json();
    dispatch(getServices(data));
  } catch (error) {
    dispatch(getError('The error has already here...'));
  }
};
