import React, { useContext } from "react";
import { LoginContext } from "./hooks/UseContextHook";

const User = () => {
  //getting LoginContext to set user name value
  const context = useContext(LoginContext);

  if (!context) {
    // handle the case when LoginContext is undefined
    return null; // or any other fallback or loading component
  }

  const { userName } = context;
  return (
    <div>
      <h1>User Name : {userName}</h1>
    </div>
  );
};

export default User;
