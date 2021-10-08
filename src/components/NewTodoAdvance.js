import React, { useState, useEffect } from 'react'

function NewTodoAdvance() {
    // add form state
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    // filter state
    const [filterName, setFilterName] = useState('all')
    const [filtered, setFilterd] = useState([])
    // edit form state
    const [editForm, setEditForm] = useState(false)
    const [updateInput, setUpdateInput] = useState('')
    const [updateId, setUpdateId] = useState(null)
    

    useEffect(() => {
        renderList()
    }, [todos, filterName])



    const addTodo = (e) => {
        e.preventDefault()
        let newTodo = {
            id: new Date().getTime(),
            text: todo,
            done: false
        }
        setTodos([...todos, newTodo])
        setTodo('')
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const doneTodo = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    done: !todo.done
                }
            }
            return todo
        }))
    }

    const editTodo = (e) => {
        e.preventDefault()
        setTodos(todos.map(todo => {
            if(todo.id === updateId){
                return {
                    ...todo,
                    text: updateInput
                }
            }
            return todo
        }))
        setEditForm(false)
        setUpdateId(null)
    }

    const editClicked = (id) => {
        setEditForm(true)
        setUpdateId(id)
        todos.forEach(todo => {
            if(todo.id === id){
                setUpdateInput(todo.text)
            }
        })
    }

    const filterTodo = (type) => {
        setFilterName(type)
        renderList()
    }

    const renderList = () => {
        switch(filterName){
            case 'completed':
                setFilterd(todos.filter(todo => todo.done === true))
                break;
            case 'uncompleted':
                setFilterd(todos.filter(todo => todo.done === false))
                break;
            default:
                setFilterd(todos)
                break
        }
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Todo App</h1>
            <div>
                <button onClick={() => filterTodo('all')}>All</button>
                <button onClick={() =>filterTodo('completed')}>Completed</button>
                <button onClick={() =>filterTodo('uncompleted')}>Uncompleted</button>
            </div>
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
                {
                    editForm 
                    ? (<form onSubmit={editTodo}>
                        <input type="text" value={updateInput} onChange={(e) => setUpdateInput(e.target.value)} />
                        <button type='submit'>Update</button>
                    </form>) 
                    : 
                    (<form onSubmit={addTodo}>
                        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                        <button type='submit'>Add</button>
                    </form>)
                }
                
            </div>
            <div style={{width: '400px', minHeight: '300px', margin: 'auto'}}>
                {
                filtered.map((todo) => (
                    <div style={{width: '100%', padding: '6px', display:'flex', justifyContent: 'space-between', border: todo.done ? '1px solid green' : '1px solid black', marginBottom: '10px', backgroundColor: todo.done ? '#ebffeb'  : 'white' }} key={todo.id}>
                        <div>{todo.text}</div>
                        <div>
                            <button onClick={() => doneTodo(todo.id)}>Mark as Done</button>
                            <button onClick={() => editClicked(todo.id)}>Edit</button>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default NewTodoAdvance
