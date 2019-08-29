import React, { useReducer } from "react";
import axios from "axios";
import EventContext from "./eventContext";
import EventReducer from "./eventReducer";

import {
  SEARCH_EVENTS,
  SET_WITHIN,
  SET_KEYWORD,
  GET_EVENTS,
  SET_ALERT,
  SET_LOADING,
  REMOVE_ALERT,
  CLEAR_EVENTS
} from "../types";

const EventState = props => {
  const initialState = {
    events: [],
    location: "New York",
    loading: false,
    keyword: "Lesbian",
    within: 10,
    alert: null
  };

  const [state, dispatch] = useReducer(EventReducer, initialState);

  //Search Events

  const searchEvents = async (location, keyword, within) => {
    setLoading();

    console.log(location, keyword, within);
    const res = await axios.get(
      `https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&location.address=${location}&sort_by=date&location.within=${within}mi&token=${
        process.env.REACT_APP_EVENTBRITE_CLIENT_ID
      }`
    );
    dispatch({
      type: SEARCH_EVENTS,
      payload: res.data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setWithin = () => dispatch({ type: SET_WITHIN });
  const setKeyword = () => dispatch({ type: SET_KEYWORD });

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
        setKeyword
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
