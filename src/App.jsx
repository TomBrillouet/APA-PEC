import { Route, Routes } from "react-router"
import ErrorPage from "./components/pages/error/ErrorPage"
import LoginPage from "./components/pages/login/LoginPage"
import Dashboard from "./components/pages/dashboard/Dashboard"
import Stats from "./components/pages/dashboard/stats/Stats"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:status" element={<Dashboard />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
