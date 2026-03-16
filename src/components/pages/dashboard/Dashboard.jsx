import styled from "styled-components"
import Main from "./Main/Main"
import Menu from "./Menu/Menu.jsx"
import Toast from "./Toast.jsx"
import { theme } from "../../../theme/index.js"

export default function Dashboard() {
  return (
    <DashboardStyled>
      <Menu />
      <Main />
      <Toast />
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  display: flex;
  min-height: 100dvh;
  background-color: ${theme.colors.background};
`
