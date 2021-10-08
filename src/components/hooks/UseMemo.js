import { useEffect, useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState(false);

  const theme = useMemo(() => {
    return {
      backgroundColor: color ? "black" : "white",
      color: color ? "white" : "black"
    };
  }, [color]);

  const double = useMemo(() => {
    return setDouble(number);
  }, [number]);

  useEffect(() => {
    console.log("theme changed");
  }, [theme]);

  return (
    <div className="App">
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>
        <button onClick={() => setColor(!color)}>Change theme</button>
      </div>
      <div style={theme}>{double}</div>
    </div>
  );
}

export default UseMemo

function setDouble(number) {
  console.log("number change");
  for (let i = 0; i < 1000; i++) {}
  return number * 2;
}
