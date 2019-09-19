import React, { useReducer } from "react";
import axios from "axios";
import EventContext from "./eventContext";
import EventReducer from "./eventReducer";

import {
  SEARCH_EVENTS,
  SET_WITHIN,
  SET_KEYWORD,
  SET_LOCATION,
  SET_FREE,
  SET_LOADING,
  CLEAR_EVENTS,
  SET_EVENT_DETAILS,
  SET_LOCATION_DETAILS
} from "../types";

let eventClientId;
// let eventClientSecret;
let res;

if (process.env.NODE_ENV === "production") {
  console.log(process.env.NODE_ENV);
  eventClientId = process.env.REACT_APP_EVENTBRITE_CLIENT_ID;
  // eventClientSecret = process.env.REACT_APP_EVENTBRITE_CLIENT_ID;
} else {
  console.log(process.env.NODE_ENV);
  eventClientId = process.env.REACT_APP_EVENTBRITE_CLIENT_ID;
  // eventClientSecret = process.env.REACT_APP_EVENTBRITE_CLIENT_SECRET;
}

const EventState = props => {
  const initialState = {
    events: [],
    eventDetails: [],
    locationDetails: [],
    location: "Oakland",
    loading: false,
    keyword: "LGBT",
    within: 25,
    isFree: null,
    alert: null
  };

  const [state, dispatch] = useReducer(EventReducer, initialState);

  const searchEvents = async (location, keyword, within, isFree) => {
    setLoading();
    setWithin(within);
    setKeyword(keyword);
    setLocation(location);
    // setFree(isFree);

    console.log(location, keyword, within, isFree);

    if (isFree !== null) {
      res = await axios.get(
        `https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&location.address=${location}&sort_by=date&location.within=${within}mi&price=free&token=${eventClientId}`
      );
    } else {
      res = await axios.get(
        `https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&location.address=${location}&sort_by=date&location.within=${within}mi&token=${eventClientId}`
      );
    }

    dispatch({
      type: SEARCH_EVENTS,
      payload: res.data
    });
  };

  const getEventDetails = async id => {
    //if context coming from Details page, must be explicit for loading = true
    setLoading(true);
    const resEventDetails = await axios.get(
      `https://www.eventbriteapi.com/v3/events/${id}/?expand=ticket_availability&token=${eventClientId}`
    );
    dispatch({
      type: SET_EVENT_DETAILS,
      payload: resEventDetails.data
    });
  };

  const getLocationDetails = async id => {
    setLoading(true);
    const resMapDetails = await axios.get(
      `https://www.eventbriteapi.com/v3/events/${id}/?expand=venue&token=${eventClientId}`
    );
    dispatch({
      type: SET_LOCATION_DETAILS,
      payload: resMapDetails.data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  const clearEvents = () => dispatch({ type: CLEAR_EVENTS });
  const setWithin = within => dispatch({ type: SET_WITHIN, payload: within });
  const setFree = isFree => dispatch({ type: SET_FREE, payload: isFree });
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
        isFree: state.isFree,
        eventDetails: state.eventDetails,
        locationDetails: state.locationDetails,
        alert: state.alert,
        searchEvents,
        setWithin,
        setKeyword,
        setFree,
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
