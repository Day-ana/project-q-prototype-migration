import {
  SEARCH_EVENTS,
  SET_WITHIN,
  SET_KEYWORD,
  SET_LOADING,
  SET_LOCATION,
  CLEAR_EVENTS,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

export default (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case CLEAR_EVENTS:
      return {
        ...state,
        events: [],
        loading: false
      };
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
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      };

    default:
      return state;
  }
};
