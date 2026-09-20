import Home from "./Pages/Home"
import LoginPage from "./Pages/Login"
import SignUpPage from "./Pages/Signup"
import Admin from "./Pages/Admin"
import Watch from "./Pages/Watch"
import Tasks from "./Pages/Tasks"
import DashboardPage from "./Pages/Dashboard"
import AuthLayout from "./Components/Auth/AuthLayout"
import WatchPlayerPage from "./Pages/WatchPlayer"
import WithdrawPage from "./Pages/WithdrawPage"
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route element={ <AuthLayout /> }>
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/signup" element={ <SignUpPage /> } />
          </Route>
          <Route path="/dashboard" element={ <DashboardPage /> } />
          <Route path="/admin" element={ <Admin /> } />
          <Route path="/watch" element={ <Watch /> } />
          <Route path="/tasks" element={ <Tasks/> } />
          <Route path="/watch/player" element={<WatchPlayerPage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App