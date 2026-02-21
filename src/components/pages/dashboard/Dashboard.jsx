import styled from "styled-components"
import Main from "./Main/Main"
import Menu from "./Menu/Menu.jsx"
import Toastadmin from "./Toastadmin.jsx"

export default function Dashboard() {
  return (
    <DashboardStyled>
      <Menu />
      <Main />
      <Toastadmin />
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  display: flex;
  min-height: 100vh;
`
