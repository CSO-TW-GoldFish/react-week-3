import axios from "axios";
import { useState } from "react"

function Verify() {

  const baseUrl = 'https://todolist-api.hexschool.io'

  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = async () => {
    try {
      await axios.get(`${baseUrl}/users/checkout`, {
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
        <span className="fs-3 fw-bold">驗證</span>
      </div>
      <div className="card-body">
        <label htmlFor="verify" className="form-label">Token</label>
        <input type="text" className="form-control" name="verify" id="verify" onChange={(e) => setToken(e.target.value)} />
        <button type="button" className="btn btn-primary mt-3" onClick={handleVerify}>驗證</button>
      </div>
      <div className="card-footer">
        <span><b>驗證結果：</b>{message}</span>
      </div>
    </div>
  )
}

export default Verify