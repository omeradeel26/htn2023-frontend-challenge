import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

import Event from "../components/Event";

export default function Events() {
  const { events, user } = useContext(DataContext);

  const renderedEvents = events.map((event, index) => {
    if (
      (event.permission === "private" && user != null) ||
      event.permission === "public"
    ) {
      return <Event key={index} event={event} />;
    }
  });

  return <div>{renderedEvents}</div>;
}
