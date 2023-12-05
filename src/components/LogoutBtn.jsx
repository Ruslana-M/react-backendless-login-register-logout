import React from 'react'
import { useNavigate } from "react-router-dom";
import Backendless from "backendless";


function LogoutBtn() {
    const navigate = useNavigate();
    function logoutFunc() {
        Backendless.UserService.logout()
          .then(() => {
            console.log("Logging out");
            console.log("redirecting to login page");
            navigate("/login");
          })
          .catch((err) => {
            console.log("Unable to logout", err);
          });
      }
  return (
    <button onClick={logoutFunc}>Logout!</button>
  )
}

export default LogoutBtn