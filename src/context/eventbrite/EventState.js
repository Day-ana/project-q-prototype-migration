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
  CLEAR_EVENTS,
  SET_EVENT_DETAILS,
  SET_LOCATION_DETAILS
} from "../types";

const EventState = props => {
  const initialState = {
    events: [],
    eventDetails: [],
    locationDetails: [],
    location: "",
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

  const getEventDetails = async id => {
    //if context coming from Details page, must be explicit for loading = true
    setLoading(true);
    const resEventDetails = await axios.get(
      `https://www.eventbriteapi.com/v3/events/${id}/?expand=ticket_availability&token=${process.env.REACT_APP_EVENTBRITE_CLIENT_ID}`
    );
    dispatch({
      type: SET_EVENT_DETAILS,
      payload: resEventDetails.data
    });
  };

  const getLocationDetails = async id => {
    setLoading(true);
    const resMapDetails = await axios.get(
      `https://www.eventbriteapi.com/v3/events/${id}/?expand=venue&token=${process.env.REACT_APP_EVENTBRITE_CLIENT_ID}`
    );
    dispatch({
      type: SET_LOCATION_DETAILS,
      payload: resMapDetails.data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  const clearEvents = () => dispatch({ type: CLEAR_EVENTS });
  const setWithin = within => dispatch({ type: SET_WITHIN, payload: within });
  const setKeyword = keyword =>
    dispatch({ type: SET_KEYWORD, payload: keyword });
  const setLocation = event => dispatch({ type: SET_LOCATION, payload: event });

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        location: state.location,
        loading: state.loading,
        keyword: state.keyword,
        within: state.within,
        eventDetails: state.eventDetails,
        locationDetails: state.locationDetails,
        alert: state.alert,
        searchEvents,
        setWithin,
        setKeyword,
        setLocation,
        clearEvents,
        getEventDetails,
        getLocationDetails
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
