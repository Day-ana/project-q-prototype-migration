import {
  SEARCH_EVENTS,
  SET_WITHIN,
  GET_EVENTS,
  SET_ALERT,
  SET_LOADING,
  REMOVE_ALERT,
  CLEAR_EVENTS
} from "../types";

export default (state, action) => {
  console.log(state);
  switch (action.type) {
    case SEARCH_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_WITHIN:
      return {
        ...state,
        within: action.payload
      };
    default:
      return state;
  }
};
