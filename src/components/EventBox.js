import { Flex, Text, Spacer, Box, Button } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import {
  FaClock,
  FaTools,
  FaChessKnight,
  FaLaptopCode,
  FaGlobe,
  FaLock,
} from "react-icons/fa";

import { formatDate } from "../utils/dateUtils";

export default function EventBox({ event }) {
  const navigate = useNavigate();

  const TimeLabel = () => {
    const millis = event.end_time - event.start_time;
    var minutes = Math.floor(millis / 60000);
    return (
      <Flex
        gap="2"
        bg={"gray.200"}
        borderRadius={8}
        padding="8px"
        alignItems="center"
        fontSize={"sm"}
      >
        <FaClock color={"grey"} /> {minutes} mins
      </Flex>
    );
  };

  const PublicLabel = () => {
    return (
      <Flex
        gap="2"
        bg={"#f9df80"}
        borderRadius={10}
        padding="8px"
        alignItems="center"
        fontSize={"sm"}
      >
        <FaGlobe color={"#eee"} /> Public
      </Flex>
    );
  };

  const PrivateLabel = () => {
    return (
      <Flex
        gap="2"
        bg={"#a900d5"}
        borderRadius={10}
        padding="8px"
        alignItems="center"
        fontSize={"sm"}
      >
        <FaLock color={"#eee"} /> Private
      </Flex>
    );
  };

  const TechLabel = () => {
    return (
      <Flex
        gap="2"
        bg={"blue.300"}
        borderRadius={10}
        padding="8px"
        alignItems="center"
        fontSize={"sm"}
      >
        <FaLaptopCode color={"#eee"} /> Tech Talk
      </Flex>
    );
  };

  const WorkshopLabel = () => {
    return (
      <Flex
        gap="2"
        bg={"red.400"}
        borderRadius={10}
        padding="8px"
        alignItems="center"
        fontSize={"sm"}
      >
        <FaTools color={"#eee"} /> Workshop
      </Flex>
    );
  };

  const ActivityLabel = () => {
    return (
      <Flex
        gap="2"
        bg={"green.400"}
        borderRadius={10}
        padding="8px"
        alignItems="center"
        fontSize={"sm"}
      >
        <FaChessKnight color={"#eee"} /> Activity
      </Flex>
    );
  };

  return (
    <Flex
      direction="column"
      marginBottom="20px"
      bg="#FFF"
      borderRadius="8px"
      padding="33px"
    >
      <Flex alignItems="center">
        <Text variant="eventTitle" marginBottom="5px">
          {event.name}
        </Text>
        <Spacer />
        <Text variant="date">
          {formatDate(event.start_time, event.end_time)}
        </Text>
      </Flex>
      <Text noOfLines={2} variant="eventDescr" marginBottom="25px">
        {event.description}
      </Text>
      <Flex>
        <Flex gap="3">
          <TimeLabel />
          {event.permission == "public" && <PublicLabel />}
          {event.permission == "private" && <PrivateLabel />}
          {event.event_type == "workshop" && <WorkshopLabel />}
          {event.event_type == "activity" && <ActivityLabel />}
          {event.event_type == "tech_talk" && <TechLabel />}
        </Flex>
        <Spacer />
        <Button zIndex={0}onClick={() => navigate(`${event.id}`)}>See More</Button>
      </Flex>
    </Flex>
  );
}
