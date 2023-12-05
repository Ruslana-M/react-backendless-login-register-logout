import Backendless from "backendless";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({}) {
  const navigate = useNavigate();
  function isValid() {
    Backendless.UserService.isValidLogin()
    .then((isValidLogin) => {
      if (isValidLogin) {
        navigate("/home");
      }
    });
  }

  isValid();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginFunc() {
    Backendless.UserService.login(email, password, true)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-Mail:"
        value={email}
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password:"
        value={password}
      />
      <button onClick={loginFunc}>Click</button>
    </div>
  );
}

export default Login;
