import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseStateHook from "./hooks/UseStateHook";
import DemoComponent from "./DemoComponent";
import UseEffectHook from "./hooks/UseEffectHook";
import UseMemoHook from "./hooks/UseMemoHook";
import UseCallbackHook from "./hooks/UseCallbackHook";
import UseReducerHook from "./hooks/UseReducerHook";
import UseContextHook from "./hooks/UseContextHook";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DemoComponent />} />
        <Route path="/useState" element={<UseStateHook />} />
        <Route path="/useEffect" element={<UseEffectHook />} />
        <Route path="/useMemo" element={<UseMemoHook />} />
        <Route path="/useCallback" element={<UseCallbackHook />} />
        <Route path="/useReducer" element={<UseReducerHook />} />
        <Route path="/useContext" element={<UseContextHook />} />
        {/* Add a default route for unknown paths */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
