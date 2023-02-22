import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";

import logo from "../assets/logo.png"

import { Flex, Spacer, Button, Box, Text, ButtonGroup, Image} from "@chakra-ui/react";

export default function NavHeader() {
  const { signOut, isSignedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <Flex bg="brand.300" alignItems="center" padding="20px" h="10vh">
      <Flex alignItems="center" gap="4" marginLeft="10vw">
        <Image src={logo} />
        <Text fontWeight="extrabold"> Hackathon Global</Text>
      </Flex>
      <Spacer/>
      <ButtonGroup marginRight="10vw">
        <Button variant="nav" onClick={() => navigate("/")}>
          <Text>Home</Text>
        </Button>
        <Button variant="nav" onClick={() => navigate("/events")}>
          <Text>Events</Text>
        </Button>
        {isSignedIn() ? (
          <Button onClick={() => signOut()} variant="authButton">
            <Text>
              Sign Out
            </Text>
          </Button>
        ) : (
          <Button
            variant="authButton"
            onClick={() => {
              navigate("/signin");
            }}
          >
            <Text>Sign In</Text>
          </Button>
        )}
      </ButtonGroup>
    </Flex>
  );
}
