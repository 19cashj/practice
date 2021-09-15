import Input from "./Input";
import React from "react";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
