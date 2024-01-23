import React, { useState, createContext } from "react";
import Login from "../Login";
import User from "../User";

// context for login user

interface ContextProps {
  userName: string;
  setUserName: any;
}
export const LoginContext = createContext<ContextProps | undefined>(undefined);

const UseContextHook = () => {
  //   basic way to use props and maintaing same states in diffrent components
  // but things getting complement in usecase where we have to use the same state in multiple component
  // on that useCase it is better to use useContext hook

  const [userName, setUserName] = useState<string>("");

  return (
    <LoginContext.Provider value={{ setUserName, userName }}>
      <div>
        <br />

        <h1>
          useContext is a React Hook that lets you read and subscribe to context
          from your component.
        </h1>
        <br />
        <h2>Declaration : const value = useContext(SomeContext)</h2>

        <br />
        <br />

        <Login />
        <User />
        {/* <Login setUserName={setUserName} />
      <User userName={userName} /> */}

        <br />
        <a href="https://react.dev/reference/react/useContext" target="_blank">
          More Info..
        </a>
      </div>
    </LoginContext.Provider>
  );
};

export default UseContextHook;
