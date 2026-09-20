import { Play, Check, Star } from "lucide-react"
import "./Css/HowItWorks.css"
const steps = [
  {
    stepNum: "01",
    icon: <Play size={17} />,
    h3: "Watch",
    p: "Watch eligible content for the required duration"
  },
  {
    stepNum: "02",
    icon: <Check size={17} />,
    h3: "Complete tasks",
    p: "Complete available tasks and eligible offers."
  },
  {
    stepNum: "03",
    icon: <Star size={17} />,
    h3: "Earn Points",
    p: "Receive verified points for completed activities."
  }
]

function HowItWorks() {
  return (
    <section className="home-section">
      <div className="home-section-header">
         <span className="section-kicker">SIMPLE PROCESS</span>
        <h2>How It Works</h2>
        <p>
          Start earning in three simple steps.
        </p>
      </div>
      <div className="steps-grid">
        {steps.map(step => {
          return (
            <article key={step.h3} className="step-card">
              <div className="step-number">{step.stepNum}</div>              
              <div className="step-icon watch-step">{step.icon}</div>             
              <h3>{step.h3}</h3>            
              <p>{step.p}</p>  
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default HowItWorks;