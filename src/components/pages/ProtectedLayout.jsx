import { Navigate, Outlet } from "react-router"
import { useAuth } from "../../context/AuthContext"
import Loader from "../reusable/Loader"

export default function ProtectedLayout() {
  const { currentUser, loading } = useAuth()
  if (loading) return <Loader />
  if (!currentUser) return <Navigate to={"/login"} />
  return <Outlet />
}
