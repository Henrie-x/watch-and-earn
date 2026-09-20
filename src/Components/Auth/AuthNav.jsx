import { Play, MoveLeft } from "lucide-react"
import { Link } from "react-router-dom"
import "./Css/AuthNav.css"

function AuthNav() {
  return (
    <header className="auth-header">
      
      <Link to="/" className="auth-brand">
      
        <span className="logo-icon">
          <Play size={20}/>
        </span>
        
        <span className="auth-brand-text">
          <strong>Watch & Earn</strong>
          <small>Earn while you watch</small>
        </span>
        
      </Link>
      
      <Link to="/" className="back-home">
        <MoveLeft size={15}/>
        Home
      </Link>
      
    </header>
  )
}

export default AuthNav;