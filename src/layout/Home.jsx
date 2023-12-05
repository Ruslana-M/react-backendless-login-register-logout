import React from "react";
import { useNavigate } from "react-router-dom";
import Backendless from "backendless";
import LogoutBtn from "../components/LogoutBtn";

function Home() {
  const navigate = useNavigate();
  function isValid() {
    Backendless.UserService.isValidLogin()
      .then((isValidLogin) => {
        if (!isValidLogin) {
          navigate("/login");
        }
      })
      .catch((err) => {
        navigate("/login");
      });
  }

  isValid();

 
  return (
    <div>
      Home
      <LogoutBtn />
    </div>
  );
}

export default Home;
