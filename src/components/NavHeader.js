import { useContext } from "react";

import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";

export default function NavHeader() {
  const { SCREENS, screen, setScreen } = useContext(DataContext);
  const { signIn, signOut, isSignedIn } = useContext(AuthContext);

  const NavButton = ({ title }) => {
    return (
      <button
        style={{ fontWeight: screen == title ? 500 : 100, marginLeft: 20 }}
        onClick={setScreen(title)}
      >
        {title}
      </button>
    );
  };

  const SignInButton = () => {
    return (
      <button
        style={{ marginLeft: 20 }}
        onClick={() => {
          setScreen("SIGNIN");
        }}
      >
        Sign In
      </button>
    );
  };

  const SignOutButton = () => {
    return (
      <button
        style={{ marginLeft: 20 }}
        onClick={() => {
          signOut();
        }}
      />
    );
  };

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

      <div
        style={{
          width: "80%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        <NavButton title={"Home"} />
        <NavButton title={"Events"} />
        {isSignedIn ? <SignInButton /> : <SignOutButton />}
      </div>
    </div>
  );
}
