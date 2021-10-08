import React, { useState, useMemo } from 'react'
import './index.css'

function Memo(){
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(5)

  const mCount = useMemo(() => {
    console.log('make item 10 times')
    return item*10
  },[item])

  return (
    <div style={{textAlign: ' center'}}>
      <h1>{count}</h1><br />
      <h1>{item}</h1><br />
      <h1>{mCount}</h1><br />
      <button onClick={() => setCount(count+1)}>+ count</button>
      <button onClick={() => setItem(item+5)}>+ Item</button>
    </div>
  )
}

export default Memo