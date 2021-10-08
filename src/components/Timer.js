import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);
  const startCounter = () => {
    setRun(true);
  };

  useEffect(() => {
    let interval = null;
    if (run) {
      interval = setInterval(function () {
        setCount((pre) => pre + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [run]);

  const pauseMe = () => {
    setRun(false);
  };

  const resetMe = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={pauseMe}>Pause</button>
      <button onClick={resetMe}>Reset</button>
    </div>
  );
}



// same but second interval

// import { useEffect, useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     let timmer = null;
//     if (start) {
//       timmer = setInterval(() => {
//         setCount((p) => p + 1);
//       }, 1000);
//     }
//     return () => {
//       clearInterval(timmer);
//     };
//   }, [start]);
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={() => setStart(!start)}>
//         {start ? "Pause" : "Start"}
//       </button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }
