import { Navigate, Outlet } from "react-router"
import { useAuth } from "../../context/AuthContext"
import Loader from "../reusable/Loader"
import { useEffect, useState } from "react"
import { initialisePatients } from "./dashboard/Main/helpers/initialiseUserSession"
import { usePatients } from "../../hooks/usePatients"
import { PatientsContext } from "../../context/PatientsContext.js"
import Menu from "./dashboard/Menu/Menu.js"
import styled from "styled-components"
import { theme } from "../../theme/index.js"
import PageTemplate from "./dashboard/PageTemplate"

export default function ProtectedLayout() {
  const { currentUser, loading } = useAuth()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [hasToggled, setHasToggled] = useState<boolean>(false)
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

  if (loading)
    return (
      <div>
        <Menu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          hasToggled={hasToggled}
          setHasToggled={setHasToggled}
        />
        <PageTemplate>
          <Loader />
        </PageTemplate>
      </div>
    )
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
