import Nav from "./Nav"
import { Outlet } from "react-router-dom"

const PublicPages = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default PublicPages