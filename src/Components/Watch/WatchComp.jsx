import {
  Play,
  ArrowLeft,
  Clock3,
  Star,
  Zap,
  CheckCircle2,
  Gift
} from "lucide-react"
import { Link } from "react-router-dom"
import "./Css/WatchComp.css"

const videos = [
  {
    id: 1,
    category: "Featured",
    duration: "30 sec",
    seconds: "30 seconds",
    points: 10,
    title: "Discover something new",
    description: "Watch this short video and earn points."
  },
  {
    id: 2,
    category: "Popular",
    duration: "45 sec",
    seconds: "45 seconds",
    points: 15,
    title: "Watch and discover",
    description: "Complete this video to receive your reward."
  },
  {
    id: 3,
    category: "New",
    duration: "60 sec",
    seconds: "60 seconds",
    points: 20,
    title: "Learn while you watch",
    description: "Stay until the end and collect your points."
  },
  {
    id: 4,
    category: "Trending",
    duration: "75 sec",
    seconds: "75 seconds",
    points: 25,
    title: "Something worth watching",
    description: "Watch this trending video and collect your reward."
  }
]

function WatchComp() {

  return (
    <div className="watch-page">

      <header className="watch-header">

        <Link to="/dashboard" className="watch-back">
          <ArrowLeft size={17} />
          Dashboard
        </Link>

        <div className="watch-brand">

          <span className="watch-logo">
            <Play size={18} />
          </span>

          <div>
            <strong>Watch & Earn</strong>
            <small>Earn while you watch</small>
          </div>

        </div>

        <div className="watch-points">
          <Star size={15} />
          <span>0 pts</span>
        </div>

      </header>


      <main className="watch-main">

        <section className="watch-intro">

          <div>

            <span className="watch-kicker">
              WATCH &bull; EARN
            </span>

            <h1>
              Watch. Complete.
              <span>Earn.</span>
            </h1>

            <p>
              Watch eligible videos and complete them to earn points.
            </p>

          </div>

          <div className="watch-streak">

            <Zap size={18} />

            <div>
              <span>Today's streak</span>
              <strong>0 days</strong>
            </div>

          </div>

        </section>


        <section className="watch-summary">

          <div className="summary-card">

            <span className="summary-icon">
              <Star size={17} />
            </span>

            <div>
              <span>Available points</span>
              <strong>0</strong>
            </div>

          </div>


          <div className="summary-card">

            <span className="summary-icon">
              <Clock3 size={17} />
            </span>

            <div>
              <span>Watched today</span>
              <strong>0 videos</strong>
            </div>

          </div>


          <div className="summary-card">

            <span className="summary-icon">
              <Gift size={17} />
            </span>

            <div>
              <span>Today's earnings</span>
              <strong>&#8358;0.00</strong>
            </div>

          </div>

        </section>


        <section className="watch-section">

          <div className="watch-section-heading">

            <div>

              <span className="watch-kicker">
                AVAILABLE NOW
              </span>

              <h2>Videos to watch</h2>

            </div>

            <span className="video-count">
              {videos.length} available
            </span>

          </div>


          <div className="video-grid">

            {videos.map((video) => (

              <article
                className="video-card"
                key={video.id}
              >

                <div className="video-thumbnail">

                  <span className="video-category">
                    {video.category}
                  </span>

                  <span className="play-button">
                    <Play size={22} />
                  </span>

                  <span className="video-duration">
                    {video.duration}
                  </span>

                </div>


                <div className="video-content">

                  <div className="video-meta">

                    <span>
                      <Clock3 size={13} />
                      {video.seconds}
                    </span>

                    <strong>
                      +{video.points} pts
                    </strong>

                  </div>


                  <h3>
                    {video.title}
                  </h3>


                  <p>
                    {video.description}
                  </p>


                  <Link
                    to={`/watch/player?id=${video.id}`}
                    className="watch-button"
                  >
                    Watch Now
                    <Play size={14} />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </section>


        <section className="watch-info">

          <div className="info-icon">
            <CheckCircle2 size={20} />
          </div>

          <div>

            <strong>
              How earning works
            </strong>

            <p>
              Start a video, watch it until the timer finishes,
              then claim your points.
            </p>

          </div>

        </section>

      </main>


      <nav className="watch-mobile-nav">

        <Link to="/dashboard">

          <span>
            <ArrowLeft size={18} />
          </span>

          <small>
            Dashboard
          </small>

        </Link>


        <Link
          to="/watch"
          className="active"
        >

          <span>
            <Play size={18} />
          </span>

          <small>
            Watch
          </small>

        </Link>


        <Link to="/tasks">

          <span>
            <CheckCircle2 size={18} />
          </span>

          <small>
            Tasks
          </small>

        </Link>

      </nav>

    </div>
  )
}

export default WatchComp