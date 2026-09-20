import { useState } from "react"
import {
  Play, 
  Rocket, 
  User, 
  PhoneCall,
  Lock, 
  ShieldKeyhole,
  Gift,
  MoveRight 
} from "lucide-react"
import { Link , useNavigate} from "react-router-dom"
import "./Css/Signup.css"

function Signup() {

  const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [referralCode, setReferralCode] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("")
  const [confirmErrorMsg, setConfirmErrorMsg] = useState("")
  const [users, setUsers] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg("")
    setConfirmErrorMsg("")
    setPhoneErrorMsg("")

    let savedUsers = JSON.parse(localStorage.getItem("users")) || []

    if (!/[A-Z]/.test(password)) {
      setErrorMsg("Password must contain at least one uppercase letter.")
      return
    }else if(!/[a-z]/.test(password)) {
      setErrorMsg("Password must contain at least one lowercase letter.")
      return
    }else if(!/[0-9]/.test(password)) {
      setErrorMsg("Password must contain at least a number")
      return
    }else if(!/[^A-Za-z0-9]/.test(password)) {
      setErrorMsg("Password must contain at least a symbol")
      return
    }

    if(password !== confirmPassword) {
      setConfirmErrorMsg("Passwords do not match. Please try again.")
      return
    }

    if (savedUsers.some(user => user.phone === phone)) {
      setPhoneErrorMsg("This phone number is already registered. Please use a different number.")
      return
    }
    
    const user = {
      fullName: fullName,
      phone: phone,
      password: password,
      referralCode: referralCode,
      balance: 0,
      points: 0,
      todayEarnings: 0,
      claimedVideos: []
    }

    const updatedUsers = [...savedUsers, user]

    setUsers(updatedUsers)
    
    localStorage.setItem("users",JSON.stringify(updatedUsers))

    setFullName("")
    setPhone("")
    setPassword("")
    setConfirmPassword("")
    setReferralCode("")

    navigate("/login")
  }
  
  return (
    <>
      <main className="auth-main">
      <section className="auth-section">
        <div className="auth-card">
          <div className="auth-logo">
            <Play size={25}/>
          </div>
          <div className="auth-heading"> 
            <span className="auth-kicker">
              GET STARTED
            </span>            
            <h1>
              Create Account 
              <Rocket />
            </h1>            
            <p className="auth-description">
              Join Watch & Earn and start earning today.
            </p>            
          </div>
          <form onSubmit={handleSubmit}> 
            <div className="form-group">             
              <label>
                Full Name
              </label>         
              <div className="input-wrapper">              
                <span className="input-icon">
                  <User size={15} />
                </span>
                <input 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name" 
                  required />
              </div>             
            </div>
            <div className="form-group">              
              <label>
                Phone Number
              </label>              
              <div className="input-wrapper">               
                <span className="input-icon">
                  <PhoneCall size={15} />
                </span>              
                <input 
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    setPhoneErrorMsg("")
                  }}
                  type="tel" 
                  placeholder="09XXXXXXXX" 
                  autoComplete="tel"
                  pattern="0[0-9]{10}"
                  required />    
              </div>    
              {phoneErrorMsg && (
                <p className="error">{phoneErrorMsg}</p>
              )}
            </div>     
            <div className="form-group">           
              <label>
                Password
              </label>         
              <div className="input-wrapper">
                <span className="input-icon">
                  <Lock size={15}/>
                </span>
                <input 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setErrorMsg("")
                  }}
                  type="password"
                  placeholder="Create a password" 
                  autoComplete="new-password" 
                  minLength="6" 
                  required />     
              </div>              
              <small className="field-hint">
                Use at least 6 characters.
              </small>
              {errorMsg && (
                <p className="error">{errorMsg}</p>
              )}
            </div>
            <div className="form-group">    
              <label>
                Confirm Password
              </label>         
              <div className="input-wrapper">                
                <span className="input-icon">
                  <ShieldKeyhole />
                </span>   
                <input 
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    setConfirmErrorMsg("")
                  }}
                  type="password" 
                  placeholder="Confirm your password" 
                  autoComplete="new-password" 
                  minLength="6" 
                  required />
              </div>     
              {confirmErrorMsg && (
                <p className="error">{confirmErrorMsg}</p>
              )}
            </div>     
            <div className="form-group referral-input-group">              
              <label>              
                Referral Code                
                <span className="optional-label">
                  Optional
                </span>                
              </label>              
              <div className="input-wrapper">               
                <span className="input-icon">
                  <Gift />
                </span>              
                <input 
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  type="text" 
                  name="referralCode" 
                  placeholder="Enter referral code" 
                  pattern="[A-Za-z0-9]+"
                  maxLength="10" 
                  autoComplete="off" />            
              </div>             
              <small className="field-hint">
                If someone invited you, enter their code.
              </small>
            </div>
            <button
              type="submit" 
              className="btn btn-primary auth-button">
              Create Account
              <span>
                <MoveRight size={15}/>
              </span>
            </button>
          </form>
          <div className="auth-divider">
            <span>Already have an account?</span>
          </div>
          <Link 
            to="/login" 
            className="create-account-button login-link-button">
            Login to Account
          </Link>       
          <p className="auth-footer">
            Create your account and start your Watch & Earn journey.
          </p>
        </div>
      </section>
    </main>
      <footer className="auth-footer-bar">
        <span>
          &#169; 2026 Watch & Earn
        </span>  
        <span>
          Built for earning.
        </span>
      </footer>
    </>
  )
}

export default Signup