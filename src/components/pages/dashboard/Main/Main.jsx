import styled from "styled-components"
import { useState } from "react"
import { fakePatients } from "../../../../datas/fakePatients"
import Header from "../Header/Header.jsx"
import PrimaryButton from "../../../reusable/PrimaryButton"
import SectionTitle from "./SectionTitle"
import PatientCard from "./PatientCard"

export default function Main() {
  const [patients, setPatients] = useState(fakePatients)
  return (
    <MainStyled>
      <Header />
      <div className="main-background">
        <div className="subtitle">
          <SectionTitle label={"PEC en cours"} />
          <PrimaryButton label={"Ajouter un patient"} />
        </div>
        <div className="patients-container">
          {patients.map((patient) => (
            <PatientCard
              id={patient.id}
              key={patient.id}
              isMan={patient.sex === "man"}
              firstName={patient.firstName}
              lastName={patient.lastName}
            />
          ))}
        </div>
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main-background {
    background-color: #f1f1f1;
    padding: 28px 32px;
    flex: 1;

    .subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e2a38;
      margin-bottom: 20px;
    }

    .patients-container {
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      align-content: start;
      gap: 16px;
      padding: 24px;
      min-height: 71%;
    }
  }
`
