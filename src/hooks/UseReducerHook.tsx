import React, { useReducer, useState } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "SHOW":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  //setup counter
  //   const [counter, setCounter] = useState<number>(0);
  //   const [showText, setShowText] = useState<boolean>(true);

  //reducer setup
  const [state, dipatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <br />
      <br />
      <p style={{ fontSize: "18px" }}>
        Reducer :- a reducer is a function that specifies how the application's
        state changes in response to actions dispatched to the state. It takes
        the current state and an action as arguments, and based on the action
        type, it returns a new state.
      </p>
      <br />

      <h1>
        useReducer is a React Hook that lets you add a reducer to your
        component.
      </h1>

      <br />
      <h2>
        Declaration : const [state, dispatch] = useReducer(reducer, initialArg,
        init?)
      </h2>

      <br />
      <br />
      <button
        onClick={() => {
          //   setCounter(counter + 1);
          //   setShowText(!showText);
          dipatch({ type: "INCREMENT" });
          dipatch({ type: "SHOW" });
        }}
      >
        Counter = {state.count}
      </button>

      <br />
      <br />
      <p style={{ fontSize: "35px" }}>
        {state.showText && "Hello There! How are you?"}
      </p>

      <br />
      <br />
      <a href="https://react.dev/reference/react/useReducer" target="_blank">
        More Info..
      </a>
    </div>
  );
};

export default UseReducerHook;
