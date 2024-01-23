import React from "react";
import UseStateHook from "./hooks/UseStateHook";
import DemoComponent from "./DemoComponent";
import UseEffectHook from "./hooks/UseEffectHook";

function App() {
  return (
    <div className="App">
      <DemoComponent />

      {/* <UseStateHook /> */}

      <UseEffectHook />
    </div>
  );
}

export default App;
