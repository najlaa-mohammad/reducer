import { memo } from "react";

const Count =memo( ({ text, count }) => {
  console.log("RenderingCount - ", text);

  return (
    <p>
      {text}-{count}
    </p>
  );
})

export default Count;
