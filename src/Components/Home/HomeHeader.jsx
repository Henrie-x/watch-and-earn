import { useState } from "react"
import { Link } from "react-router-dom"
import { Play, X } from "lucide-react"
import "./Css/HomeHeader.css"


function HomeHeader() {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  
  return (
    <>
      <div className= {isMenuOpen ? "home-overlay active" : "home-overlay"}></div>
      
      <div className={isMenuOpen ? "home-modal active" : "home-modal"}>
        <div className="home-modal-inner">
          <div className="home-modal-header">
            <span>Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="close-modal">
              <X />
            </button>
          </div>
          <nav className="home-modal-nav">
            <Link to="/" className="link home-nav-active">Home</Link>
            <Link to="/login" className="link">Login</Link>
            <Link to="/signup" className="link nav-signup">Sign Up</Link>
          </nav>
        </div>
      </div>
      
      <header className="home-header">
        <Link to="/" className="home-brand">
          
          <span className="logo-icon">
            <Play size={20}/>
          </span>
          
          <span className="home-brand-text">
            <strong>Watch & Earn</strong>
            <small>Earn while you watch</small>
          </span>
          
        </Link>
  
        <nav className="home-nav">
          <Link to="/" className="link home-nav-active">Home</Link>
          <Link to="/login" className="link">Login</Link>
          <Link to="/signup" className="link nav-signup">Sign Up</Link>
        </nav>
  
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  )
}

export default HomeHeader;