import { useState } from "react";

const UseStateHook = () => {
  //useState hook to for handling input values

  const [inputValue, setInputValue] = useState<string>("Default Value");

  // onchange handler

  const onChangeHandler = (event: string | any) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <br />

      <h1>
        useState is a React Hook that lets you add a state variable to your
        component.
      </h1>
      <br />
      <h2>Declaration : const [state, setState] = useState(initialState)</h2>

      <br />
      <br />
      <input
        placeholder="Type Something..."
        type="text"
        value={inputValue}
        onChange={onChangeHandler}
      />
      <br />
      <br />

      <h3>Current State Value = {inputValue}</h3>

      <br />
      <a href="https://react.dev/reference/react/useState" target="_blank">
        More Info..
      </a>
    </div>
  );
};

export default UseStateHook;
