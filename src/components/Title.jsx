import React, { memo } from "react";

const Title = () => {
  console.log("RenderingTitle");
  return <h1>Hello React</h1>;
};

export default memo(Title);
