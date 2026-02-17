import styled from "styled-components"
import Aside from "../../reusable/Aside"
import Main from "./Main"

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
