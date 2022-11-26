import {useState} from 'react'

function App() {

  const FC = "form-control"

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState(false)
  const [valid, setValid] = useState(true)
  const [validUser, setValidUser] = useState(true)
  const [validPass, setValidPass] = useState(true)

  return(
    <div className="container">
      <h1 className='fw-bold fs-25 mb-1 text-center text-info title'>Login</h1>
      {alert ? <div className="alert alert-danger alert-dismissible" role="alert">
        Warning: Missing Fields
        <button 
          className="btn-close"
          aria-label="close"
          data-bs-dismiss="alert"
          onClick={() => setAlert(false)}
          ></button>
      </div> : ""}
      <form
        className={valid ? "" : "was-validated"}
        noValidate
        onSubmit={e => {
          e.preventDefault()
          if (username.length <= 0 || password.length <= 0){
            setValid(false)
            setAlert(true)
          }
      }}>
        <div className="input-group mb-4">
          <span class="input-group-text">@</span>
          <div className="form-floating">
            <input 
              type="text"
              id="username"
              placeholder="Username" 
              value={username}
              onChange={e => {
                const val = e.target.value
                setUsername(val)
                setValidUser(false)
              }}
              className={validUser ? FC : username.length > 0 ? FC + " is-valid" : FC + " is-invalid"}
              required />
            <label htmlFor="username">Username</label>
            <div className="invalid-feedback user-invalid">Invalid input</div>
          </div>
        </div>

        <div className="form-floating mb-2">
          <input 
            type="password"
            id="password"
            placeholder="Password" 
            value={password}
            onChange={e => {
              const val = e.target.value
              setPassword(val)
              setValidPass(false)
            }}
            className={validPass ? FC : password.length > 0 ? FC + " is-valid" : FC + " is-invalid"}
            required />
          <label htmlFor="password">Password</label>
          <div className="invalid-feedback">Invalid input</div>
        </div>

        <input
          className="btn btn-outline-primary" 
          type="submit" 
          value="Submit" />
      </form>
    </div>
  )
}

export default App
