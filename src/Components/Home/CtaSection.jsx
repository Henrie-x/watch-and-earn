import "./Css/CtaSection.css"
import { Play, MoveRight } from "lucide-react"
import { Link } from "react-router-dom"

function CtaSection() {
  return (
    <section className="home-cta">
      <div className="cta-content">    
        <span className="cta-icon">
          <Play size={20} />
        </span>      
        <h2>
          Ready to Start Earning?
        </h2>        
        <p>
          Create your free account and
          start your Watch & Earn journey.
        </p>      
        <Link to="/signup" className="cta-button">
          Create Account
          <span>
            <MoveRight size={15} />
          </span>
        </Link>
        
      </div>
      
    </section>
  )
}

export default CtaSection;