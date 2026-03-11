import { Navigate, Outlet } from "react-router"
import { useAuth } from "../../context/AuthContext"
import Loader from "../reusable/Loader"
import { useEffect } from "react"
import { initialisePatients } from "./dashboard/Main/helpers/initialiseUserSession"
import { usePatients } from "../../hooks/usePatients"
import { PatientsContext } from "../../context/PatientsContext.jsx"

export default function ProtectedLayout() {
  const { currentUser, loading } = useAuth()
  const {
    addNewPatient,
    updatePatients,
    setPatients,
    patients,
    updateLogBook,
  } = usePatients()

  const userId = currentUser?.uid
  useEffect(() => {
    if (!userId) return
    initialisePatients(userId, setPatients)
  }, [userId])

  const contextValue = {
    addNewPatient,
    updatePatients,
    setPatients,
    patients,
    updateLogBook,
  }

  if (loading) return <Loader />
  if (!currentUser) return <Navigate to={"/login"} />
  return (
    <PatientsContext.Provider value={contextValue}>
      <Outlet />
    </PatientsContext.Provider>
  )
}
