import styled from "styled-components"
import Main from "./Main/Main"
import Aside from "./Aside/Aside.jsx"

export default function Dashboard() {
  return (
    <DashboardStyled>
      <Aside />
      <Main />
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  display: flex;
  min-height: 100vh;
`
