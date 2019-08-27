import React, { useReducer } from "react";
import axios from "axios";
import EventContext from "./eventContext";
import EventReducer from "./eventReducer";

import {
  SEARCH_EVENTS,
  SET_WITHIN,
  SET_KEYWORD,
  SET_LOCATION,
  SET_LOADING,
  GET_EVENTS,
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_EVENTS
} from "../types";

const EventState = props => {
  const initialState = {
    events: [],
    location: "Oakland",
    loading: false,
    keyword: "Queer",
    within: 100,
    alert: null
  };

  const [state, dispatch] = useReducer(EventReducer, initialState);

  const searchEvents = async (location, keyword, within) => {
    setLoading();
    setWithin(within);
    setKeyword(keyword);
    setLocation(location);

    console.log(location, keyword, within);
    const res = await axios.get(
      `https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&location.address=${location}&sort_by=date&location.within=${within}mi&token=${process.env.REACT_APP_EVENTBRITE_CLIENT_ID}`
    );
    dispatch({
      type: SEARCH_EVENTS,
      payload: res.data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  const clearEvents = () => dispatch({ type: CLEAR_EVENTS });
  const setWithin = within => dispatch({ type: SET_WITHIN, payload: within });
  const setKeyword = keyword =>
    dispatch({ type: SET_KEYWORD, payload: keyword });
  const setLocation = location =>
    dispatch({ type: SET_LOCATION, payload: location });

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        location: state.location,
        loading: state.loading,
        keyword: state.keyword,
        within: state.within,
        alert: state.alert,
        searchEvents,
        setWithin,
        setKeyword,
        setLocation,
        clearEvents
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
