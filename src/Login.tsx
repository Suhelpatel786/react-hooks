import React, { useContext } from "react";
import { LoginContext } from "./hooks/UseContextHook";

const Login = () => {
  //getting LoginContext to set user name value
  const context = useContext(LoginContext);

  if (!context) {
    // handle the case when LoginContext is undefined
    return null; // or any other fallback or loading component
  }

  const { setUserName } = context;

  return (
    <div>
      <input onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
};

export default Login;
