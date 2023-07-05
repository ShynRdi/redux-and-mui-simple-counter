const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        counter: state.counter + action.payloud,
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        counter: state.counter - action.payloud,
      };
    default:
      return state;
  }
};
export default counterReducer;
