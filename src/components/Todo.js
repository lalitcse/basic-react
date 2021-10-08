import React, { useState } from 'react'
import './index.css'

function App(){
  const [ todoList, setTodoList ] = useState([])
  const [ toggleInput, setToggleInput] = useState(false)
  const [ edit , setEdit] = useState(false)
  const [ todo, setTodo ] = useState('')
  const todoChange = (e) => {
    let _data = (e.target.value).trim()
    setTodo(_data)
  }

  const addTodo = () => {
    if(todo.length > 0){
      setTodoList([...todoList, {id: Math.random(), todo: todo, done: false}])
      setTodo('')
    }else{
      alert('Can not add empty todo')
    }
    
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id != id))
  }

  const markTodo = (id) => {
    setTodoList(
      todoList.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })
    )
  }

  const editTodo = (id) => {
    // setToggleInput(true)
    setEdit(true)
    todoList.forEach(item => {
      if(item.id === id){
        setTodo(item.todo)
      }
    })
  }

  const updateTodo = () => {
    setEdit(false)
  }

  if(edit){
    return (
      <div>
        <input onChange={todoChange} type="text" value={todo} name='todo' />
        <button onClick={updateTodo}>Update</button>
      </div>
    )
  }
  console.log('todoList', todoList)
  return (
    <div>
      <input onChange={todoChange} type="text" value={todo} name='todo' />
      <button onClick={addTodo}>Add</button>
      <div>
        <ul>
        {
          todoList.map((item) => (
            <li style={{ 
              backgroundColor: item.done ? 'rgb(88, 202, 88)' : 'rgb(207, 207, 207)',
              textDecoration: item.done ? 'line-through' : null
            }} 
              className='list' key={item.id}>{item.todo} 
            <button onClick={() => markTodo(item.id)}>Mark as {item.done ? 'un done' : 'done'}</button>
            <button onClick={() => editTodo(item.id)}>Edit</button>
            <button onClick={()=> deleteTodo(item.id)}>X</button></li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default Todo
