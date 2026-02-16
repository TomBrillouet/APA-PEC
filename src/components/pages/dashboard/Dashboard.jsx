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
        <div className="info-pro">
          <span>{pro.lastName}</span>
          <span>{pro.firstName}</span>
          <span>{pro.job}</span>
          <span>{pro.mail}</span>
          <span>{pro.phone}</span>
          <span>{pro.society}</span>
          <span>{pro.website}</span>
        </div>
        <hr />
        <div className="patients-container">
          {patients.map((patient) => {
            return (
              <div className="patient">
                <span>{patient.lastName}</span>
                <span>{patient.firstName}</span>
                <span>{patient.sex}</span>
              </div>
            )
          })}
        </div>
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
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
    .patients-container {
      flex: 1;
      display: flex;
      gap: 50px;
      .patient {
        display: flex;
        flex-direction: column;
      }
    }
  }
`
