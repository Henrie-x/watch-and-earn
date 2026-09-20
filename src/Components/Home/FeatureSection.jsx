import "./Css/FeatureSection.css"
import { Check, Play, Flame } from "lucide-react"


const featureList = [
  {
    strong: "Watch & Earn",
    small: "Earn points from eligible content."
  },
  {
    strong: "Daily Rewards",
    small: "Check in daily and build your streak."
  },
  {
    strong: "Referral Rewards",
    small: "Invite friends and earn eligible rewards."
  },
  {
    strong: "Naira Withdrawal",
    small: "Request your eligible earnings through Naira."
  }
]

const miniActivity = [
  {
    icon: <Play size={14} />,
    strong: "Video completed",
    small: "Just now",
    point: "+10"
  },
  {
    icon: <Flame size={14} />,
    strong: "Daily check-in",
    small: "Today",
    point: "+10"
  }
]

function FeatureSection() {
  return (
    <section className="home-feature-section">
      <div className="feature-content">
        
        <span className="section-kicker">
          BUILT FOR EARNING
        </span>

        <h2>
          Everything You Need
          In One Place.
        </h2>
        
        <p>
          Keep track of your activities,
          points, referrals and withdrawals
          from one simple dashboard.
        </p>

        <div className="feature-list">
          {featureList.map(list => {
            return (
              <div key={list.strong} className="feature-item">               
                <span>
                  <Check size={14}/>
                </span>                
                <div>
                  <strong>{list.strong}</strong>                
                  <small>{list.small}</small>
                </div>              
              </div>
            )
          })}
        </div>
      </div>

      <div className="mini-dashboard">
        <div className="mini-dashboard-header">
          <div>
            <span>
              WATCH & EARN
            </span>
            <strong>
              Your Wallet
            </strong>
          </div>
          <span className="mini-menu">
            &bull; &bull; &bull; 
          </span>
        </div>
        <div className="mini-balance">         
          <small>
            TOTAL BALANCE
          </small>       
          <strong>
            125.50
            <span>&#8358</span>
          </strong>          
        </div>
        <div className="mini-stats">          
          <div>
            <span>Points</span>
            <strong>1,255</strong>
          </div>         
          <div>
            <span>Pending</span>
            <strong>100</strong>
          </div>       
        </div>
        <div className="mini-activities">
          {miniActivity.map(act => {
            return (
              <div key={act.strong} className="mini-activity">                
                <div className="mini-activity-icon">
                  {act.icon}
                </div>          
                <div>
                  <strong>{act.strong}</strong>                 
                  <small>{act.small}</small>
                </div>                
                <b>{act.point}</b>                
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection;