import axios from "axios"
import { useState } from "react"

function SignIn() {

  const baseUrl = 'https://todolist-api.hexschool.io'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const signIn = async () => {
    try {
      const response = await axios.post(`${baseUrl}/users/sign_in`, {email, password})
      setMessage(response.data.token);
    } catch (error) {
      setMessage(error.response.data.message);
    }
    
  }

  return (
    <div className="card text-bg-light">
      <div className="card-header">
        <span className="fs-3 fw-bold">登入</span>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="signInEmail" className="form-label">Email</label>
          <input id="signInEmail" className="form-control" name="email" type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="signInPassword" className="form-label">Password</label>
          <input id="signInPassword" className="form-control" name="password" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary mb-3" onClick={signIn}>
          Sign In
        </button>
      </div>
      <div className="card-footer">
      <span><b>Token：</b>{message}</span>
      </div>
    </div>
  )
}

export default SignIn