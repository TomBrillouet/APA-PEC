import styled from "styled-components"
import Main from "./Main/Main"
import Menu from "./Menu/Menu.jsx"

export default function Dashboard() {
  return (
    <DashboardStyled>
      <Menu />
      <Main />
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  display: flex;
  min-height: 100vh;
`
