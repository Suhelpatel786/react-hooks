import React from "react";
import UseStateHook from "./hooks/UseStateHook";
import DemoComponent from "./DemoComponent";
import UseEffectHook from "./hooks/UseEffectHook";
import UseMemoHook from "./hooks/UseMemoHook";

function App() {
  return (
    <div className="App">
      <DemoComponent />

      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      <UseMemoHook />
    </div>
  );
}

export default App;
