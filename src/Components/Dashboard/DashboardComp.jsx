import {
  Play,
  LogOut,
  Wallet,
  Star,
  TrendingUp,
  Clock3,
  ArrowUpRight,
  Check,
  Gift,
  Users,
  Flame,
  Banknote,
  History,
  Copy,
  ArrowRight,
  Send,
  MessageCircle
} from "lucide-react"
import { useState, useEffect } from "react"
import "./Css/DashboardComp.css"
import { useNavigate,Link } from "react-router-dom"

function DashboardComp() {

  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null)
  const savedUser = JSON.parse(localStorage.getItem("currentUser"))

  useEffect(() => {
    setCurrentUser(savedUser)
  },[])

  function handleLogout() {
    localStorage.removeItem("currentUser")
    navigate("/login")
  }

  return (
    <div className="dashboard-page">

      <header className="dashboard-header">

        <div className="dashboard-brand">

          <span className="logo-icon">
            <Play size={20} />
          </span>

          <div className="logo-text">
            <strong>Watch & Earn</strong>
            <small>Earn while you watch</small>
          </div>

        </div>

        <button className="logout-button" onClick={() => handleLogout()}>
          <LogOut size={16} />
          Logout
        </button>

      </header>


      <main className="dashboard-main">

        <section className="dashboard-intro">

          <div>
            <span className="welcome-label">
              Welcome back &bull;
            </span>

            <h1>{currentUser?.fullName}</h1>

            <p>Ready to earn today?</p>
          </div>

          <span className="account-status">
            <span>&bull;</span>
            Active
          </span>

        </section>


        <section className="balance-card">

          <div className="balance-main">

            <div className="balance-label">
              <Wallet size={17} />
              Available Balance
            </div>

            <h2>&#8358;{currentUser?.balance?.toFixed(2) ?? "0.00"}</h2>

            <p>
              Withdrawable earnings
            </p>

          </div>

          <div className="balance-points">

            <span>Total Points</span>

            <strong>{currentUser?.points}</strong>

            <small>points</small>

          </div>

        </section>


        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon">
              <Star size={18} />
            </div>

            <span>Total Points</span>

            <strong>{currentUser?.points}</strong>

            <small>
              Keep earning
              <ArrowUpRight size={13} />
            </small>

          </div>


          { /*      <div className="stat-card">

            <div className="stat-icon">
              <Clock3 size={18} />
            </div>

            <span>Pending</span>

            <strong>&#8358;{currentUser?.pending?.toFixed(2)}</strong>
            <small>
              Processing
            </small>

          </div>
*/}

          <div className="stat-card">

            <div className="stat-icon">
              <TrendingUp size={18} />
            </div>

            <span>Today's Earnings</span>

            <strong>&#8358;{currentUser?.todayEarnings?.toFixed(2) ?? "0.00"}</strong>

            <small>
              +0 today
            </small>

          </div>

        </section>


        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <span className="section-kicker">
                EARN MORE
              </span>

              <h2>Quick Actions</h2>
            </div>

            <span className="section-meta">
              6 ways
            </span>

          </div>


          <div className="action-grid">

            <a href="/watch" className="action-card">

              <span className="action-icon">
                <Play size={19} />
              </span>

              <strong>Watch & Earn</strong>

              <small>Watch and earn points</small>

              <ArrowRight size={15} />

            </a>


            <a href="/tasks" className="action-card">

              <span className="action-icon">
                <Check size={19} />
              </span>

              <strong>Tasks</strong>

              <small>Complete simple tasks</small>

              <ArrowRight size={15} />

            </a>


            <a href="#" className="action-card">

              <span className="action-icon">
                <Gift size={19} />
              </span>

              <strong>Offers</strong>

              <small>Discover new offers</small>

              <ArrowRight size={15} />

            </a>


            <a href="#" className="action-card">

              <span className="action-icon">
                <Star size={19} />
              </span>

              <strong>Rewards</strong>

              <small>Claim your rewards</small>

              <ArrowRight size={15} />

            </a>


            <a href="#dailyCheckin" className="action-card">

              <span className="action-icon">
                <Flame size={19} />
              </span>

              <strong>Daily Check-in</strong>

              <small>Claim your daily points</small>

              <ArrowRight size={15} />

            </a>


            <a href="#referral" className="action-card">

              <span className="action-icon">
                <Users size={19} />
              </span>

              <strong>Referral</strong>

              <small>Invite friends and earn</small>

              <ArrowRight size={15} />

            </a>

          </div>

        </section>


        <section className="dashboard-section">

          <div className="feature-card daily-card">

            <div className="feature-icon">
              <Flame size={22} />
            </div>

            <div className="feature-content">

              <span className="section-kicker">
                DAILY REWARD
              </span>

              <h2>Keep your streak alive</h2>

              <p>
                Check in every day and collect bonus points.
              </p>

              <div className="feature-stats">

                <div>
                  <span>Current streak</span>
                  <strong>0 days</strong>
                </div>

                <div>
                  <span>Today's reward</span>
                  <strong>10 points</strong>
                </div>

              </div>

              <button className="primary-button">
                Claim Reward
                <ArrowRight size={15} />
              </button>

            </div>

          </div>

        </section>


        <section className="dashboard-section">

          <div className="feature-card referral-card">

            <div className="feature-icon">
              <Users size={22} />
            </div>

            <div className="feature-content">

              <span className="section-kicker">
                REFER & EARN
              </span>

              <h2>Earn with your friends</h2>

              <p>
                Invite friends and earn bonus points when they qualify.
              </p>

              <div className="referral-code">

                <div>
                  <span>Your referral code</span>
                  <strong>Loading...</strong>
                </div>

                <button>
                  <Copy size={15} />
                  Copy
                </button>

              </div>

            </div>

          </div>

        </section>


        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <span className="section-kicker">
                YOUR WALLET
              </span>

              <h2>Withdraw Earnings</h2>
            </div>

            <Banknote size={21} />

          </div>


          <div className="withdraw-card">

            <div className="withdraw-top">

              <div>
                <span>Available balance</span>
                <strong>&#8358;{currentUser?.balance?.toFixed(2) ?? "0.00"}</strong>
              </div>

              <div>
                <span>Minimum withdrawal</span>
                <strong>&#8358;500</strong>
              </div>

            </div>


            <div className="conversion-box">

              <span>Conversion rate</span>

              <strong>
                10 Points &bull; &#8358;1
              </strong>

            </div>


            <div className="withdraw-form">

              <div>
                <label>Withdrawal amount</label>

                <input
                  type="number"
                  placeholder="&#8358;500"
                  min="500"
                />
              </div>

              <div>
                <label>Bank account number</label>

                <input
                  type="tel"
                  placeholder="Enter account number"
                />
              </div>

              <button
                className="primary-button"
                onClick={() => navigate("/withdraw")}
              >
                Request Withdrawal
                <ArrowRight size={15} />
              </button>

            </div>

          </div>

        </section>


        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <span className="section-kicker">
                ACTIVITY
              </span>

              <h2>Recent Transactions</h2>
            </div>

            <History size={20} />

          </div>


          <div className="transactions-card">

            <div className="empty-state">

              <History size={24} />

              <strong>No transactions yet</strong>

              <p>
                Your earning activity will appear here.
              </p>

            </div>

          </div>

        </section>


        <section className="dashboard-section">

          <div className="community-grid">

            <a href="#" className="community-card">

              <span className="community-icon">
                <Send size={20} />
              </span>

              <div>
                <span className="section-kicker">
                  COMMUNITY
                </span>

                <strong>Join our Telegram</strong>

                <p>
                  Get updates, tips and announcements.
                </p>
              </div>

              <ArrowUpRight size={16} />

            </a>


            <a href="#" className="community-card">

              <span className="community-icon">
                <MessageCircle size={20} />
              </span>

              <div>
                <span className="section-kicker">
                  SUPPORT
                </span>

                <strong>Need help?</strong>

                <p>
                  Contact our support team.
                </p>
              </div>

              <ArrowUpRight size={16} />

            </a>

          </div>

        </section>

      </main>


      <nav className="mobile-bottom-nav">

        <Link to="/dashboard" className="active">
          <span>
            <Wallet size={18} />
          </span>
          <small>Home</small>
        </Link>

        <Link to="/watch">
          <span>
            <Play size={18} />
          </span>
          <small>Watch</small>
        </Link>

        <a href="/tasks">
          <span>
            <Check size={18} />
          </span>
          <small>Tasks</small>
        </a>

        <a href="#referral">
          <span>
            <Users size={18} />
          </span>
          <small>Referral</small>
        </a>

      </nav>

    </div>
  )
}

export default DashboardComp;