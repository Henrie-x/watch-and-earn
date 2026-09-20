import { Play, PhoneCall, Lock, MoveRight,Hand } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Css/LoginComp.css"

function LoginComp() {

  const navigate= useNavigate()
  const [ phone, setPhone ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ msg, setMsg ] = useState("")
  const [ errorMsg, setErrorMsg ] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    let savedUsers = JSON.parse(localStorage.getItem("users")) || []
    
    const user = savedUsers.find(user => user.phone === phone && user.password === password)
    
    if (user) {
      setErrorMsg("")
      setMsg("Login successful")
      setTimeout(() => {
        localStorage.setItem("currentUser",JSON.stringify(user))
        navigate("/dashboard")
      },1500)
    }else {
      setMsg("")
      setErrorMsg("Wrong phone number / password")
    }
  }
  
  return (
    <>
      <main className="auth-main">
        <section className="auth-section">
          <div className="auth-card">
            <div className="auth-logo">
              <Play size={25} />
            </div>
            <div className="auth-header-card">
              <span className="auth-kicker">
                WELCOME BACK
              </span>
              
              <h1>
                Welcome Back
                <Hand />
              </h1>
              
              <p className="auth-description">
                Login to your account and continue earning.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              {errorMsg && (
                <p className="error">{errorMsg}</p> 
              )}
              {msg && (
                <p className="msg">{msg}</p> 
              )}
              <div className="group-form">
                <label>Phone Number</label>            
                <div className="input-wrapper">                
                  <span className="input-icon">
                    <PhoneCall size={15} />
                  </span>                  
                  <input 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel" 
                    name="phone" 
                    placeholder="09xxxxxxxx" 
                    autoComplete="tel" 
                    required />                  
                </div>
              </div>
              <div className="group-form">
                <label>Password</label>             
                <div className="input-wrapper">                 
                  <span className="input-icon">
                    <Lock size={15} />
                  </span>                  
                  <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    autoComplete="current-password" 
                    required /> 
                </div>
              </div>
              <div className="remember-row">
                <label className="remember-label">               
                  <input type="checkbox" />                 
                  <span>
                    Remember me
                  </span>                  
                </label>       
              </div>
              <button 
                type="submit" 
                className="btn btn-primary auth-button">
                Login
                <span>
                  <MoveRight size={15} />
                </span>
              </button>
            </form>
              <div className="auth-divider">
                <span>New to Watch & Earn?</span>
              </div> 
              <Link 
                to="/signup" 
                className="create-account-button">
                Create Account
              </Link>
                           
              <p className="auth-footer">
                By continuing, you agree to use Watch & Earn responsibly.
              </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default LoginComp;