// custom hook

import { useState } from "react";

const useCount = (number) => {
  console.log("custom hook chlra h");
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((pre) => pre + number);
  };

  return [count, inc];
};

export default useCount;

// use in component one ==============>>>>>>>>>>>>>>>>>

// import React from "react";
// import useCount from "./useCount";

// const One = () => {
//   const [count, inc] = useCount(1);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => inc()}>Increase By one</button>
//     </>
//   );
// };

// export default One;

// use in component two ==============>>>>>>>>>>>>>>>>>

// import React from "react";
// import useCount from "./useCount";

// const Two = () => {
//   const [count, inc] = useCount(2);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => inc()}>Increase By two</button>
//     </>
//   );
// };

// export default Two;