import { ArrowLeft, PartyPopper} from "lucide-react"
import { Link, useSearchParams } from "react-router-dom"
import { useState } from "react"
import "./Css/WatchPlayerComp.css"
import Video1 from "../../assets/ADs_v2.mp4"
import Video2 from "../../assets/ADs_v3.mp4"
import Video3 from "../../assets/ADs_v4.mp4"
import Video4 from "../../assets/ADs_v5.mp4"

const videos = [
  {
    id: 1,
    title: "Discover something new",
    points: 10,
    video: Video1
  },
  {
    id: 2,
    title: "Watch and discover",
    points: 15,
    video: Video2
  },
  {
    id: 3,
    title: "Learn while you watch",
    points: 25,
    video: Video3
  },
  {
    id: 4,
    title: "Something worth watching",
    points: 30,
    video: Video4
  }
]

function WatchPlayerComp() {

  const [completed, setCompleted] = useState(false)
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get("id")
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const alreadyClaimed = currentUser?.claimedVideos?.includes(Number(videoId)) ?? false

  const selectedVideo = videos.find(video => video.id === Number(videoId))

  if (!selectedVideo) {
    return <p>Video not found.</p>
  }

  function handleClaimReward() {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    )

    if (!currentUser.claimedVideos) {
      currentUser.claimedVideos = []
    }

    const newPoints = currentUser.points + selectedVideo.points
    currentUser.points = newPoints
    currentUser.balance = newPoints / 10
    currentUser.todayEarnings += selectedVideo.points / 10
    currentUser.claimedVideos.push(Number(videoId))

    localStorage.setItem("currentUser", JSON.stringify(currentUser))

    const savedUser = JSON.parse(localStorage.getItem("users")) || []
    const updatedUsers = savedUser.map(user => user.phone === currentUser.phone ? {...user,points: currentUser.points,balance: currentUser.balance,todayEarnings: currentUser.todayEarnings,claimedVideos: currentUser.claimedVideos} : user)
    localStorage.setItem("users",JSON.stringify(updatedUsers))
    setCompleted(false)
  }

  return (
    <div className="watch-player-page">

      <header className="watch-player-header">

        <Link to="/watch">
          <ArrowLeft size={17} />
          Back to videos
        </Link>

        <strong>Watch & Earn</strong>

      </header>


      <main className="watch-player-main">

        <div className="player-box">

          <video 
            className="player-video"
            src={selectedVideo.video}
            controls
            onEnded={() => {
              if(!alreadyClaimed) {
                setCompleted(true)
              }
            }}
            />

        </div>

        {completed && (
          <div className="completion-message">
            <p>
              <PartyPopper size={15} />
                Video completed! Reward unlocked.
            </p>
        
            <button onClick={handleClaimReward}>
              Claim Reward
            </button>
          </div>
        )}
        <section className="player-info">

          <span className="watch-kicker">
            WATCH &bull; EARN
          </span>

          <h1>{selectedVideo.title}</h1>

          <p>
            Watch the video until the timer finishes to unlock your reward.
          </p>

        </section>

      </main>

    </div>
  )
}

export default WatchPlayerComp