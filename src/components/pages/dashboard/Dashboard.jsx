import { useState } from "react"
import { fakePatients } from "../../../datas/fakePatients"
import { fakePro } from "../../../datas/fakePro"
import styled from "styled-components"

export default function Dashboard() {
  const [patients, setPatients] = useState(fakePatients)
  const [pro, setPro] = useState(fakePro)

  return (
    <DashboardStyled>
      <aside className="menu"></aside>
      <main>
        <div className="info-pro">{JSON.stringify(pro)}</div>
        <hr />
        <div className="patients-container">{}</div>
      </main>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  display: flex;
  .menu {
    height: 100vh;
    width: 12vw;
    border-right: solid black 1px;
  }
  main {
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    .info-pro {
      border: solid black 1px;
      height: 10vh;
    }
    .patients-container {
      flex: 1;
    }
  }
`
