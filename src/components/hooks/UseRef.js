import { useEffect, useRef, useState } from "react";

function UseRef() {
  const [text, setText] = useState('')
  const renderRef = useRef(0)
  const preState = useRef()

  useEffect(() => {
    renderRef.current = renderRef.current + 1
    preState.current = text
  })
  return (
    <div className="App">
      <input type='text' value={text} onChange={(e) => setText(e.target.value)}  />
      <h2>this is {text} and was {preState.current}</h2>
      <div>Total render {renderRef.current}</div>
    </div>
  );
}

export default UseRef