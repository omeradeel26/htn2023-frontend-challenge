import React, { useEffect, useState, createContext, useContext } from "react";
import { data } from "./data";

import axios from "axios";

import { AuthContext } from "./AuthProvider";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

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

  const filterEvents = () => {};

  useEffect(() => {
    // axios.get("https://api.hackthenorth.com/v3/events").then((response) => {
    //   setEvents(response.data);
    // });

    for (let i = 0; i < data.length; i++) {
      data[i].searched = true;
      data[i].filtered = true;
    }

    setEvents(data);
  }, []);

  return (
    <DataContext.Provider
      value={{events, filterEvents, searchEvents }}
    >
      {children}
    </DataContext.Provider>
  );

  //screen
};
