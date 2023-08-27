import axios from "axios"
import { useState } from "react"

function SignUp() {

  const baseUrl = 'https://todolist-api.hexschool.io'

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
    <div className="card text-bg-light">
      <div className="card-header">
        <span className="fs-3 fw-bold">註冊</span>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="signUpEmail" className="form-label">Email</label>
          <input id="signUpEmail" className="form-control" name="email" type="text" value={form.email} placeholder="Email" onChange={updateForm}/>
        </div>
        <div className="mb-3">
          <label htmlFor="signUpPassword" className="form-label">Password</label>
          <input id="signUpPassword" className="form-control" name="password" type="password" value={form.password} placeholder="Password" onChange={updateForm} />
        </div>
        <div className="mb-3">
          <label htmlFor="nickname" className="form-label">Nickname</label>
          <input id="nickname" className="form-control" name="nickname" type="text" value={form.nickname} placeholder="nickname" onChange={updateForm} />
        </div>
        <button type="button" className="btn btn-primary mb-3" onClick={signUp}>
          Sign Up
        </button>
      </div>
      <div className="card-footer">
        <span><b>註冊訊息：</b>{message}</span>
      </div>
    </div>
  )
}

export default SignUp