import {
  SEARCH_EVENTS,
  SET_WITHIN,
  SET_KEYWORD,
  SET_LOADING,
  SET_LOCATION,
  CLEAR_EVENTS,
  GET_DETAILS,
  SET_ALERT,
  REMOVE_ALERT,
  SET_EVENT_DETAILS,
  SET_LOCATION_DETAILS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CLEAR_EVENTS:
      // console.log(action.type);
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
    case SET_EVENT_DETAILS:
      return {
        ...state,
        eventDetails: action.payload,
        loading: true
      };
    case SET_LOCATION_DETAILS:
      return {
        ...state,
        locationDetails: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
