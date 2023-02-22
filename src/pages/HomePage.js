import { Flex, Image, Center, Text, Spacer, Button } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom"

import earth from "../assets/earth.gif";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Flex bg="brand.900" h="90vh">
      <Spacer/>
      <Flex w="50vw" direction="column" padding="20px">
        <Spacer/>
        <Text variant="title">
          Hackathon Global is HERE! At the <Text variant="title" as="u">world's largest hackathon,</Text>
        </Text>
        <Spacer/>
        <Flex gap="5" align="center">
            <Button variant="calltoaction" onClick={() => {navigate('/events')}}><Text>View Events</Text></Button>
            <Text as="u">Sign In Here.</Text>
        </Flex>
        <Spacer/>
      </Flex>
      <Center w="30vw">
        <Image src={earth} w={400} h={350} />
      </Center>
      <Spacer/>
    </Flex>
  );
}
