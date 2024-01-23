import { useEffect, useState } from "react";

const UseEffectHook = () => {
  //useState for counter

  const [counter, setCounter] = useState<number>(0);
  const [counter1, setCounter1] = useState<number>(100);

  //useEffect example

  useEffect(() => {
    console.log("USE EFFECT CALLED");
  }, [counter]);
  return (
    <div>
      <br />
      <h1>
        useEffect is a React Hook that lets you synchronize a component with an
        external system.
      </h1>
      <br />
      <h2>Declaration : useEffect(setup, dependencies?)</h2>
      <br />
      <br />
      Counter = {counter} &nbsp; &nbsp; &nbsp; Counter1 = {counter1} &nbsp;
      &nbsp; &nbsp;
      <button onClick={() => setCounter(counter + 1)}> Increment </button>
      &nbsp; &nbsp; &nbsp;{" "}
      <button onClick={() => setCounter1(counter1 + 1)}> Increment1 </button>
      <br />
      <br />
      <br />
      <a href="https://react.dev/reference/react/useEffect" target="_blank">
        More Info..
      </a>
    </div>
  );
};

export default UseEffectHook;
