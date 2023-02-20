import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

export default function SignInBox() {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div>
      <input
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter Username..."
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password..."
      />
      <button
        onClick={() => {
          if (signIn(user, password)) {
            navigate("/home");
          }
        }}
      >
        Sign In
      </button>
    </div>
  );
}
