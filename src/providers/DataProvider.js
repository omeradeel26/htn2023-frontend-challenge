import React, { useEffect, useState, createContext, useContext } from "react";
import { data } from "./data";

import axios from "axios";

import { AuthContext } from "./AuthProvider";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const FILTERS = { sort: "asc", eventType: "all", permission: "all" };

  const searchEvents = (searchVal) => {
    let tempEvents = [...events];
    for (let i = 0; i < tempEvents.length; i++) {
      if (searchVal.length != 0) {
        let search = false;
        if (searchVal.length <= tempEvents[i].name.length) {
          if (
            tempEvents[i].name.substring(0, searchVal.length).toLowerCase() ==
            searchVal.toLowerCase()
          ) {
            search = true;
          }
        }

        tempEvents[i].searched = search;
      } else {
        tempEvents[i].searched = true;
      }
    }
    setEvents(tempEvents);
  };

  const filterEvents = (filter) => {
    let tempEvents = [...events];
    for (let i = 0; i < tempEvents.length; i++) {
      if (
        (tempEvents[i].permission === filter.permission ||
          filter.permission === "all") &&
        (tempEvents[i].event_type === filter.eventType ||
          filter.eventType === "all")
      ) {
        tempEvents[i].filtered = true;
      } else {
        tempEvents[i].filtered = false;
      }
    }

    if (filter.sort == "desc") {
      tempEvents.sort(function compare(a, b) {
        return parseFloat(b.start_time) - parseFloat(a.start_time);
      });
    } else {
      tempEvents.sort(function compare(a, b) {
        return parseFloat(a.start_time) - parseFloat(b.start_time);
      });
    }

    setEvents(tempEvents);
  };

  const getRequest = async (url) => {
    try {
      const { data: response } = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getEvent = async (eventId) => {
    const event = await getRequest(
      `https://api.hackthenorth.com/v3/events/${eventId}`
    );
    return event;
  };

  useEffect(() => {
    axios.get("https://api.hackthenorth.com/v3/events").then((response) => {
      const data = response.data;

      for (let i = 0; i < data.length; i++) {
        data[i].searched = true;
        data[i].filtered = true;
      }

      data.sort(function compare(a, b) {
        return parseFloat(b.start_time) - parseFloat(a.start_time);
      });

      setEvents(data);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{ events, filterEvents, searchEvents, FILTERS, getEvent }}
    >
      {children}
    </DataContext.Provider>
  );

  //screen
};
