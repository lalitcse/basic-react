// import React, {Suspense, createContext, useRef, useState} from 'react'
import React from 'react'
import './index.css'
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// const User = React.lazy(() => import('./components/User'))
// import Counter from './components/Counter'
import NewTodoAdvance from './components/NewTodoAdvance'
// import User from './components/User'
// export const UserContext = createContext()
function App(){
//  let user = useRef('')
//  const [name, setName] = useState('')

//  const changeInp = () => {
//   console.log(user.current.value)
//   setName(user.current.value)
//  }

//  const chageMe = () => {
//   console.log(user.current.value)
//   setName(user.current.value)
//  }
  return (
    <>
    <NewTodoAdvance />
    {/* <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
    <Suspense fallback={<Loader />}>
      <User />
    </Suspense> */}
    {/* <UserContext.Provider value={{name: 'lalit kumar'}}>
      <input ref={user} type="text" value={name} onChange={chageMe} />
      <button onClick={() => changeInp()}>click</button>
      <Counter />
    </UserContext.Provider> */}
    {/* <Router>
      <Switch>
        <Route path='/' exact component={Counter} />
        <Route path='/user' component={User} />
      </Switch>
    </Router>
    <Link to='/'>Counter</Link>
    <Link to='/user'>User</Link> */}
    </>
  )
}

export default App
