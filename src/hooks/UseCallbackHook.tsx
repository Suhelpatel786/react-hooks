import React, { useCallback, useState } from "react";
import Child from "../Child";
const UseCallbackHook = () => {
  //set up counters

  const [counter, setCounter] = useState<number>(0);
  const [counterTwo, setCounterTwo] = useState<number>(100);

  //counter increment function

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };

  // here if i dont use function in useCallback then it will render the child component
  // again and again because of this component render it will some how again call this fun function
  // this function is pass as props to child component so the child component asume that
  // because of the fun call it will render that component again.

  const fun = useCallback(() => {
    console.log("Hello There ");
  }, [counterTwo]);

  return (
    <div>
      <br />
      <br />
      {/* Problem :-  when evenr my this component is render when i updating the state it will also re-render that child component
which is un-neccessry render or it will definetly compromise the performance of the site
so, we can solve this using useCallback hook.
*/}
      <Child counterTwo={counterTwo} func={fun} />
      <br />
      <h1>
        useCallback is a React Hook that lets you cache a function definition
        between re-renders.
      </h1>
      <br />
      <h2>Declaration : const cachedFn = useCallback(fn, dependencies)</h2>
      <br />
      <br />
      <button onClick={IncrementCounter}>Counter = {counter}</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      {/* <button onClick={() => setCounterTwo(counterTwo + 1)}>
        Update Child Counter
      </button> */}
      <br />
      <br />
      <br />
      <a href="https://react.dev/reference/react/useCallback" target="_blank">
        More Info..
      </a>
    </div>
  );
};

export default UseCallbackHook;
