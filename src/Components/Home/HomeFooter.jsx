import "./Css/HomeFooter.css"
import { Play, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", path: "/" },
      { name: "Login", path: "/login" },
      { name: "Sign Up", path: "/signup" }
    ]
  },
  {
    title: "Platform",
    links: [
      { name: "Watch & Earn", path: "/watch" },
      { name: "Tasks", path: "/tasks" },
      { name: "Dashboard", path: "/dashboard" }
    ]
  }
]

function HomeFooter() {
  return (
    <footer className="home-footer">

      <div className="footer-glow"></div>

      <div className="footer-glass">

        <div className="footer-main">

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">
                <Play size={17} />
              </span>

              <span>
                <strong>Watch & Earn</strong>
                <small>Earn while you watch</small>
              </span>
            </Link>

            <p>
              Watch eligible content, complete tasks
              and turn your time into rewards.
            </p>

          </div>


          <div className="footer-links">

            {footerLinks.map(section => (
              <div key={section.title} className="footer-link-group">

                <strong>{section.title}</strong>

                {section.links.map(link => (
                  <Link key={link.name} to={link.path}>
                    {link.name}
                  </Link>
                ))}

              </div>
            ))}

          </div>


          <div className="footer-action">

            <span>READY TO EARN?</span>

            <h3>
              Your time.
              <br />
              Your rewards.
            </h3>

            <Link to="/signup" className="footer-cta">
              Get Started
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Watch & Earn
          </span>

          <span>
            Built for earning.
          </span>

        </div>

      </div>

    </footer>
  )
}

export default HomeFooter;