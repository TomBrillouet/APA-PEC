import styled, { createGlobalStyle } from "styled-components"
import Main from "./Main/Main"
import Toast from "./Toast.jsx"
import { theme } from "../../../theme/index.js"
import { useContext, useEffect } from "react"
import { driver } from "driver.js"
import { tourSteps } from "../../../datas/tourSteps.js"
import { useTour } from "../../../hooks/useTour.jsx"
import { initialisePro } from "./Main/helpers/initialiseUserSession.js"
import { useAuth } from "../../../context/AuthContext.jsx"
import { usePro } from "../../../hooks/usePro.jsx"
import "driver.js/dist/driver.css"
import { useOutletContext } from "react-router"
import { PatientsContext } from "../../../context/PatientsContext.jsx"

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
  const { openMenu } = useOutletContext()
  const { currentUser } = useAuth()
  const userId = currentUser?.uid
  const { pro, setPro, proSubmit } = usePro()

  useEffect(() => {
    if (!userId) return
    initialisePro(userId, setPro)
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
      <Main pro={pro} proSubmit={proSubmit} patients={patients} />
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
