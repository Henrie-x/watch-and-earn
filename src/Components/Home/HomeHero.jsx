import { MoveRight, Circle, Play, MoveUpRight, Check, Star} from 'lucide-react';
import { Link } from "react-router-dom"
import "./Css/HomeHeroNew.css"

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        
        <div className="hero-badge">
          <Circle size={7} fill="currentColor" />
          WATCH &bull; COMPLETE &bull; EARN
        </div>

        <h1>
          Turn Your Time Into
          <span>Rewards.</span>
        </h1>

         <p className="hero-description">
          Watch eligible content, complete tasks,
          earn points and track your rewards
          all in one simple place.
        </p>

        <div className="hero-btns">
          <Link to="/signup" className="hero-primary-btn">
            Create Free Account 
            <span>
              <MoveRight />
            </span>
          </Link>

          <Link to="/login" className="hero-secondary-btn">
            Login
          </Link>
        </div>

        <div className="hero-trust">
          <div>
            <strong>&#8358;500</strong>
            <span>Minimum withdrawal</span>
          </div>
          
          <div className="trust-divider"></div>
          
          <div>
            <strong>10 pts</strong>
            <span>Equals &#8358;1</span>
          </div>

          <div className="trust-divider"></div>
          
          <div>
            <strong>24/7</strong>
            <span>Reward tracking</span>
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="hero-glow"></div>
        <div className="earning-card">
          <div className="earning-card-top">
            <span className="earning-icon">
              <Play size={20}/>
            </span>
            <span className="earning-status">
              <span className="dot"></span>
            </span>
          </div>
          <p className="earning-label">
            Available Balance 
          </p>
          <h2>&#8358; 250.00</h2>
          <div className="earning-progress">
            <div className="progress-info">
              <span>Points</span>
              <strong>2,500</strong>
            </div>
            <div className="home-progress-track">
              <div className="home-progress-fill"></div>
            </div>
          </div>
          <div className="earning-row">
            <div>
              <span>Today's earnings</span>
              <strong>+50 pts</strong>
            </div>
            <div className="earning-arrow">
              <MoveUpRight size={14} />
            </div>
          </div>
        </div>
        <div className="floating-card floating-card-one">  
          <span>
            <Check />
          </span> 
          <div>
            <strong>Task Complete</strong>
            <small>+25 Points</small>
          </div>  
        </div>
        <div className="floating-card floating-card-two">
          <span>
            <Star />
          </span>
          <div>
            <strong>Reward Earned</strong>
            <small>+50 Points</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero;