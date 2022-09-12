const serviceListReducer = (state = {
  items: [],
  error: false
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_SERVICES':
      return {
        items: payload,
        error: false
      };
    case 'GET_ERROR':
      return {
        items: [],
        error: true
      };
    default:
      return state;
  }
};

export default serviceListReducer;
