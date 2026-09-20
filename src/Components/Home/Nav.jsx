import { useNavigate } from "react-router-dom"

const Nav = () => {

  const navigate= useNavigate()
  
  return (
    <nav>
      <div>watch and earn</div>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/login")}>login</li>
        <li onClick={() => navigate("/signup")}>sign up</li>
        <li onClick={() => navigate("/about")}>About</li>
      </ul>
    </nav>
  )
}

export default Nav