import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

import Event from "../components/Event";

export default function EventPage() {
  const { events, user } = useContext(DataContext);

  const renderedEvents = events.map((event, index) => {
    if (
      (event.permission === "private" && user != null) ||
      event.permission === "public"
    ) {
      return <Event key={index} event={event} />;
    }
  });

  return (
    <div>
      <h1>Events</h1>
      {renderedEvents}
    </div>
  );
}
