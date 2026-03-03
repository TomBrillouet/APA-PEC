import { Navigate, Route, Routes } from "react-router"
import ErrorPage from "./components/pages/error/ErrorPage"
import LoginPage from "./components/pages/login/LoginPage"
import Dashboard from "./components/pages/dashboard/Dashboard"
import Stats from "./components/pages/dashboard/stats/Stats"
import { useAuth } from "./context/AuthContext"
import Loader from "./components/reusable/Loader"
import Tests from "./components/pages/dashboard/tests/Tests"

export default function App() {
  const { currentUser, loading } = useAuth()
  if (loading) return <Loader />

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={currentUser ? "/dashboard" : "/login"} />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:status" element={<Dashboard />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
