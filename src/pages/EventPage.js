import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";

import { Text, Flex } from "@chakra-ui/react";

import Event from "../components/Event";
import EventManager from "../components/EventManager";

export default function EventPage() {
  const { events } = useContext(DataContext);
  const { isSignedIn } = useContext(AuthContext);

  events.sort(function compare(a, b) {
    return parseFloat(a.start_time) - parseFloat(b.start_time);
  });

  let renderedEvents = events.map((event, index) => {
    if (
      ((event.permission === "private" && isSignedIn()) ||
        event.permission === "public") &&
      event.filtered &&
      event.searched
    ) {
      return <Event key={index} event={event} />;
    }
  });

  return (
    <Flex direction="column" bg="brand.900" border="3px solid black" h="100vh">
      <Text>Events</Text>
      <EventManager />
      {renderedEvents}
    </Flex>
  );
}
