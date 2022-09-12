const dateEventsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_TODAY':
      return payload;
    case 'ADD_EVENT':
      return [...state, payload];
    case 'DELETE_EVENT':
      return state.filter((elem) => elem.date !== payload.date);
    case 'UPDATE_EVENT':
      return [...state.filter((elem) => elem.date !== payload.date), payload];
    default:
      return state;
  }
};

export default dateEventsReducer;
