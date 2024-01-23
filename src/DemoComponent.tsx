import React from "react";
import { Link } from "react-router-dom";

const DemoComponent = () => {
  return (
    <div>
      <h1>Demo Component</h1>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/useState">UseStateHook</Link>
        </li>
        <li>
          <Link to="/useEffect">UseEffectHook</Link>
        </li>
        <li>
          <Link to="/useMemo">UseMemoHook</Link>
        </li>
        <li>
          <Link to="/useCallback">UseCallbackHook</Link>
        </li>
        <li>
          <Link to="/useReducer">UseReducerHook</Link>
        </li>
        <li>
          <Link to="/useContext">UseContextHook</Link>
        </li>
      </ul>
    </div>
  );
};

export default DemoComponent;
