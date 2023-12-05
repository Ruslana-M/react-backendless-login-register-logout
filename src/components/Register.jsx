import Backendless from "backendless";
import React, { useState } from "react";


function Register({}) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function registerFunc (){
let user = new Backendless.User();
user.email = email;
user.password = password;
    Backendless.UserService.register(user)
    .then (res=> {
        console.log(res)
    })
    .catch (err => {console.log(err)})
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
        <button onClick={registerFunc}>Click</button>
    
    </div>
  );
}

export default Register;
