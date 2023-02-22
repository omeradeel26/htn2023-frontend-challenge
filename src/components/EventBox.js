import { Flex, Text, Spacer } from "@chakra-ui/react";

export default function EventBox({ event }) {
  return (
    <Flex
      direction="column"
      marginBottom="20px"
      bg="#eee"
      borderRadius="8px"
      padding="32px"
    >
      <Text variant="eventTitle">{event.name}</Text>
      <Text noOfLines={[1,2,2]} variant="eventDescr"> {event.description} </Text>
    </Flex>
  );
}
