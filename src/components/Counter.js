import React, { useReducer, useState, useContext } from 'react'
import { UserContext } from '../App'

const reducer = (state, action) => {
    switch(action.type){
        case 'inc':
            return state + 1
        case 'drc':
            return state - 1
        case 'reset':
            return 0
        default:
            return state
    }
}
const Counter = () => {
    const { name } = useContext(UserContext)
    console.log(name)
    // const [count, setCount] = useState(0)
    let initial = 0
    const [count, dispatch] = useReducer(reducer, initial)
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{name}</h1>
            <button onClick={() => dispatch({type: 'inc'})}>+</button>
            {count}
            <button onClick={() => dispatch({type: 'drc'})}>-</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default Counter
