import styled from "styled-components"
import { useState } from "react"
import { fakePatients } from "../../../../datas/fakePatients"
import Header from "../Header/Header.jsx"
import Button from "../../../reusable/Button"
import PatientCard from "./PatientCard"
import SectionTitle from "./AddPatient/Form/SectionTitle.jsx"
import AddPatient from "./AddPatient/AddPatient.jsx"
import Searchbar from "./Searchbar.jsx"

export default function Main() {
  const [patients, setPatients] = useState(fakePatients)
  const [AddisOpen, setAddisOpen] = useState(false)
  const [search, setSearch] = useState("")

  const toggleAddPatient = () => {
    setAddisOpen(!AddisOpen)
  }

  const addNewPatient = (newPatient) => {
    const patientsCopy = [...patients]
    const patientsUpdated = [newPatient, ...patientsCopy]
    setPatients(patientsUpdated)
    toggleAddPatient()
  }

  const patientsFiltered = patients.filter(
    (patient) =>
      patient.lastName.toLowerCase().includes(search.toLowerCase()) ||
      patient.firstName.toLowerCase().includes(search.toLowerCase())
  )

  const patientsSorted = [...patientsFiltered].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  )

  return (
    <MainStyled>
      <Header />
      {AddisOpen && <div className="overlay" onClick={toggleAddPatient}></div>}
      {AddisOpen && (
        <AddPatient addNewPatient={addNewPatient} onClose={toggleAddPatient} />
      )}
      <div className="main-background">
        <div className="subtitle">
          <SectionTitle label={"PEC en cours"} />
          <Searchbar onChange={(e) => setSearch(e.target.value)} />
          <Button label={"Ajouter un patient"} onClick={toggleAddPatient} />
        </div>
        <div className="patients-container">
          {patientsSorted.map((patient) => (
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
  background-color: #f1f1f1;

  .overlay {
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    background-color: #1e2a3878;
  }

  .main-background {
    background-color: #f1f1f1;
    padding: 28px 32px;
    flex: 1;
    box-shadow: inset 0 12px 16px rgba(0, 0, 0, 0.09);
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
