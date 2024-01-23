import React, { FunctionComponent, memo, useEffect } from "react";

//props
interface ChildProps {
  counterTwo: number;
  func: any;
}

const Child = ({ counterTwo, func }: ChildProps) => {
  console.log("CHILD COMPONENT RENDER");

  return <div>Child Component = {counterTwo}</div>;
};

export default memo(Child);
