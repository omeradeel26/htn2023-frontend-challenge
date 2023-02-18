import React, { useEffect, useState, createContext, useContext } from "react";
import { data } from "./data";

import axios from "axios";

import { AuthContext } from "./AuthProvider";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [screen, setScreen] = useState("EVENTS");
  const [events, setEvents] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    // axios.get("https://api.hackthenorth.com/v3/events").then((response) => {
    //   setEvents(response.data);
    // });

    setEvents(data);
  }, []);

  return (
    <DataContext.Provider value={{ screen, setScreen, events }}>
      {children}
    </DataContext.Provider>
  );

  //screen
};
