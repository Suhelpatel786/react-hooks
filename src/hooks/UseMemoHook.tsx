import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  // Creating Problem Statement

  const [counterOne, setCounterOne] = useState<number>(0);
  const [counterTwo, setCounterTwo] = useState<number>(100);

  //counter addition handlers

  const IncrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const IncrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  //complex logic of your code that will may take a time in execution as compare to other code

  //it will effect the whole code means when ever your component is re-render by any of the reason it could be state updation or anything
  //this logic will recalculate. so it will empact on whole compoent or on the website

  //   const isEven = () => {
  //     console.log("..............");
  //     let i = 0;
  //     while (i < 2000000000) i++;

  //     return counterOne % 2 === 0;
  //   };

  //this code of the component is only execute when the counterOne state is Change

  const isEven = useMemo(() => {
    console.log("..............");
    let i = 0;
    while (i < 2000000000) i++;

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <br />
      <h1>
        useMemo is a React Hook that lets you cache the result of a calculation
        between re-renders.
      </h1>
      <br />
      <h2>
        Declaration : const cachedValue = useMemo(calculateValue, dependencies)
      </h2>
      <br />
      <br />
      <button onClick={IncrementCounterOne}>CounterOne = {counterOne}</button>
      &nbsp; &nbsp; &nbsp; &nbsp; {isEven ? "Even" : "Odd"}
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={IncrementCounterTwo}>CounterTwo = {counterTwo}</button>
      <br />
      <br />
      <br />
      <a href="https://react.dev/reference/react/useMemo" target="_blank">
        More Info..
      </a>
    </div>
  );
};

export default UseMemoHook;
