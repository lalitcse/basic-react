import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "drc":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function UseReducer() {
  let initial = {
    count: 0
  };
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "inc" })}>-</button>
        <button onClick={() => dispatch({ type: "drc" })}>+</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}