import axios from "axios";
import { useState } from "react"

function SignOut() {

  const baseUrl = 'https://todolist-api.hexschool.io'

  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleSignOut = async () => {
    try {
      await axios.post(`${baseUrl}/users/sign_out`, {}, {
        headers: {
          authorization: token
        }
      })
      setMessage("token 驗證成功");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  }

  return (
    <div className="card text-bg-light">
      <div className="card-header">
        <span className="fs-3 fw-bold">登出</span>
      </div>
      <div className="card-body">
        <label htmlFor="signOut" className="form-label">Token</label>
        <input type="text" className="form-control" name="signOut" id="signOut" onChange={(e) => setToken(e.target.value)} />
        <button type="button" className="btn btn-primary mt-3" onClick={handleSignOut}>驗證</button>
      </div>
      <div className="card-footer">
      <span><b>登出訊息：</b>{message}</span>
      </div>
    </div>
  )
}

export default SignOut