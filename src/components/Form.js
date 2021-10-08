import React, { useState } from 'react'
import './index.css'

function Form(){
const [ form, setForm] = useState({
  username: '',
  make: '',
  lastname: ''
})

const formChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  setForm({...form, [name]: value})
  console.log(form)
}

const formSubmit = (e) => {
  e.preventDefault()
  console.log('user data', form)
}
  return (
    <div>
      <form onSubmit={formSubmit}>
      <input name='username' type="text" value={form.username} onChange={formChange} /> <br /><br />
      <select name='make' value={form.make} onChange={formChange}>
        <option value="one">One</option>
        <option value="two">Two</option>
      </select><br /><br />
      
      <input name='lastname' type="text" value={form.lastname} onChange={formChange} /><br /><br /> 
      <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Form
