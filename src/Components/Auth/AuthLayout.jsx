import { Outlet } from "react-router-dom"
import AuthNav from "./AuthNav"

function AuthLayout() {
  return (
    <>
      <AuthNav />
      <Outlet />
    </>
  )
}

export default AuthLayout;