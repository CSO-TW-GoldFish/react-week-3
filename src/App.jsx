import axios from "axios"
import { useState } from "react";

let baseUrl = 'https://todolist-api.hexschool.io';

function App() {

  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: ''
  })
  const [message, setMessage] = useState('')

  const signUp = async () => {
    try {
      let response = await axios.post(`${baseUrl}/users/sign_up`, form)
      setMessage("註冊成功, UID: " + response.data.uid);
    } catch (error) {
      setMessage("失敗: " + error.response.data.message);
    }
  }

  function updateForm(e) {
    const { name, value } = e.target
    setForm({...form, [name]: value}) 
  }

  return (
    <div>
      <h2>註冊</h2>
      <label htmlFor="email">Email</label><br />
      <input id="email" name="email" type="text" value={form.email} placeholder="Email" onChange={updateForm} /><br />
      <input name="password" type="password" value={form.password} placeholder="Password" onChange={updateForm}/><br />
      <input name="nickname" type="text" value={form.nickname} placeholder="Nickname" onChange={updateForm} /><br />
      <button type="button" onClick={signUp}>
        Sign Up
      </button>
      <p>{message}</p>
    </div>
  )
}

export default App
