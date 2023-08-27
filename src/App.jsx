import SignOut from "./components/SignOut";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Verify from "./components/Verify";

function App() {
  return (
    <div className="bg-secondary-subtle p-3">
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="row flex-column g-3">
              <div className="col"><SignUp /></div>
              <div className="col"><SignIn /></div>
              <div className="col"><Verify /></div>
              <div className="col"><SignOut /></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="card h-100">
              <div className="card-header">
                <span className="fs-3 fw-bold">TodoList</span>
              </div>
              <div className="card-body">todo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
