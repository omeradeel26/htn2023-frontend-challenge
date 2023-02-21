import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";

import { Button, ButtonGroup } from "@chakra-ui/react";

export default function NavHeader() {
  const { signOut, isSignedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "100%",
        height: "100px",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        <h1>Hack The North 2023</h1>
      </div>

      <ul
        style={{
          width: "80%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          border: "1px solid black",
          listStyleType: "none",
        }}
      >
        <li>
          <Button onClick={() => navigate("/")}>Home</Button>
        </li>
        <li>
          <Button onClick={() => navigate("/events")}>Events</Button>
        </li>
        {isSignedIn() ? (
          <li>
            <Button onClick={() => signOut()}>Sign Out</Button>
          </li>
        ) : (
          <li>
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign In
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
}
