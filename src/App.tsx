import React from "react";
import UseStateHook from "./hooks/UseStateHook";
import DemoComponent from "./DemoComponent";
import UseEffectHook from "./hooks/UseEffectHook";
import UseMemoHook from "./hooks/UseMemoHook";
import UseCallbackHook from "./hooks/UseCallbackHook";
import UseReducerHook from "./hooks/UseReducerHook";

function App() {
  return (
    <div className="App">
      <DemoComponent />

      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseMemoHook /> */}

      {/* <UseCallbackHook /> */}
      <UseReducerHook />
    </div>
  );
}

export default App;
