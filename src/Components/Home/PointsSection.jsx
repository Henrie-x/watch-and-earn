import "./Css/PointsSection.css"
import { Coins } from "lucide-react"

function PointsSection() {
  return (
    <section className="points-section">    
      <div className="points-card">       
        <div className="points-icon">
          <Coins size={20} />
        </div>      
        <div className="points-content">        
          <span className="section-kicker">
            POINTS SYSTEM
          </span> 
          <h2>
            Simple & Clear
          </h2>        
          <p>
            Your points are converted according
            to the current app settings.
          </p>        
        </div>        
        <div className="points-rate">         
          <span>
            CURRENT EXAMPLE
          </span>         
          <strong>
            10 Points
            <small>=</small>
            1 Naira 
          </strong>    
          <small>
            1 Point = 0.10 Naira
          </small>         
        </div>
      </div>
    </section>
    
  )
}

export default PointsSection;