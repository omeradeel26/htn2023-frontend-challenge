import { useState, useContext, useEffect } from "react";

import { DataContext } from "../providers/DataProvider";

import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddOn,
  Flex,
  Button,
  InputRightAddon,
} from "@chakra-ui/react";

import { SearchIcon, TriangleDownIcon } from "@chakra-ui/icons";

export default function EventManager() {
  const [filter, setFilter] = useState({ eventType: "", permission: "" });
  const [searchVal, setSearchVal] = useState("");

  const { filterEvents, searchEvents } = useContext(DataContext);

  return (
    <Flex marginBottom="20px">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="grey.300" />}
        />
        <Input
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
            searchEvents(e.target.value);
          }}
          placeholder="Search Events..."
          bg="white"
          variant="outline"
        />
        <InputRightAddon
          padding="0"
          children={
            <Button rightIcon={<TriangleDownIcon color="grey.300" />}>
              Filter Events
            </Button>
          }
        />
      </InputGroup>
    </Flex>
  );
}
