import { Navigate, Outlet } from "react-router"
import { useAuth } from "../../context/AuthContext"
import Loader from "../reusable/Loader"
import { useEffect, useState } from "react"
import { initialisePatients } from "./dashboard/Main/helpers/initialiseUserSession"
import { usePatients } from "../../hooks/usePatients"
import { PatientsContext } from "../../context/PatientsContext.jsx"
import Menu from "./dashboard/Menu/Menu.jsx"
import styled from "styled-components"
import { theme } from "../../theme/index.js"

export default function ProtectedLayout() {
  const { currentUser, loading } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [hasToggled, setHasToggled] = useState(false)
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

  const openMenu = () => {
    setIsOpen(true)
    setHasToggled(true)
  }

  if (loading) return <Loader />
  if (!currentUser) return <Navigate to={"/login"} />
  return (
    <PatientsContext.Provider value={contextValue}>
      <ProtectedLayoutStyled>
        <Menu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          hasToggled={hasToggled}
          setHasToggled={setHasToggled}
        />
        <Outlet context={{ openMenu }} />
      </ProtectedLayoutStyled>
    </PatientsContext.Provider>
  )
}

const ProtectedLayoutStyled = styled.div`
  display: flex;
  background-color: ${theme.colors.background};
`
