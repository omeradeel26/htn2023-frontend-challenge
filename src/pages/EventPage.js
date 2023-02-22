import { useParams } from "react-router-dom";
import { useContext } from "react";

import { DataContext } from "../providers/DataProvider";

import { Text, Flex, Spacer } from "@chakra-ui/react";

export default function EventPage() {
  const params = useParams();

  const { getEvent } = useContext(DataContext);

  console.log(params);

  const event = getEvent(params.eventId);

  console.log(event);

  return (
    <Flex bg={"brand.900"}>
      <Text variant="header">{event.name}</Text>
      <Text variant="header">{event.description}</Text>
    </Flex>
  );
}
