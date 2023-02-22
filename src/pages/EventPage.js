import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";

import { Text, Flex, Spacer } from "@chakra-ui/react";

import EventBox from "../components/EventBox";
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
      return <EventBox key={index} event={event} />;
    }
  });

  return (
    <Flex bg="brand.900" minHeight="90vh">
      <Spacer />
      <Flex direction="column" w="76vw">
        <Text variant="header">Events</Text>
        <EventManager />
        {renderedEvents}
      </Flex>
      <Spacer />
    </Flex>
  );
}
