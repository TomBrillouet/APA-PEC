import styled, { createGlobalStyle } from "styled-components"
import Main from "./Main/Main"
import Toast from "./Toast.js"
import { theme } from "../../../theme/index.js"
import { useContext, useEffect } from "react"
import { driver } from "driver.js"
import { tourSteps } from "../../../datas/tourSteps.js"
import { useTour } from "../../../hooks/useTour.js"
import { initialisePro } from "./Main/helpers/initialiseUserSession.js"
import { useAuth } from "../../../context/AuthContext.js"
import { usePro } from "../../../hooks/usePro.js"
import "driver.js/dist/driver.css"
import { useOutletContext } from "react-router"
import { PatientsContext } from "../../../context/PatientsContext.js"

const TourStyles = createGlobalStyle`
.driver-popover {
  background-color: #f9f7f4;

  .driver-popover-navigation-btns {
    button{
      border-radius: 5px;
    }
  }
  .driver-popover-title{
    color: ${theme.colors.darkBlue};
  }}
`
export default function Dashboard() {
  const { patients } = useContext(PatientsContext)
  const { tourCompleted, completeTour } = useTour()
  const { openMenu } = useOutletContext<{ openMenu: () => void }>()
  const { currentUser } = useAuth()
  const userId = currentUser?.uid
  const { pro, setPro, proSubmit, isLoading, setIsLoading } = usePro()
  useEffect(() => {
    if (!userId) return
    initialisePro(userId, setPro, setIsLoading)
  }, [userId])

  useEffect(() => {
    if (!pro || !patients) return
    const driverObj = driver({
      steps: tourSteps(openMenu),
      onDestroyStarted: () => {
        completeTour()
        driverObj.destroy()
      },
      showProgress: true,
      allowClose: false,
      disableActiveInteraction: true,
      progressText: `{{current}} sur {{total}}`,
    })
    !tourCompleted && driverObj.drive()
  }, [pro, patients])

  return (
    <DashboardStyled>
      <TourStyles />
      <Main
        pro={pro}
        proSubmit={proSubmit}
        patients={patients}
        isLoading={isLoading}
      />
      <Toast />
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  display: flex;
  flex: 1;
  min-height: 100dvh;
  padding-left: 15px;
`
