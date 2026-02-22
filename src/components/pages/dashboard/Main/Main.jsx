import styled from "styled-components"
import { useState } from "react"
import Header from "../Header/Header.jsx"
import { MainContext } from "../../../../context/MainContext.jsx"
import PatientsGrid from "./PatientsGrid.jsx"
import TopMainBar from "./TopMainBar.jsx"
import { usePatients } from "../../../../hooks/usePatients.jsx"
import PatientOpened from "./Popup/PatientOpened/PatientOpened.jsx"
import AddPatient from "./Popup/AddPatient/AddPatient.jsx"

export default function Main() {
  const [addPatient, setAddPatient] = useState(false)
  const [patientOpen, setPatientOpen] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [search, setSearch] = useState("")
  const { addNewPatient, updatePatients, patients, updateLogBook } =
    usePatients()

  const toggleAddPatient = () => {
    setAddPatient(!addPatient)
  }

  const handleSelectedPatient = (selectedPatient) => {
    setSelectedPatient(selectedPatient)
  }

  const togglePatient = (patientToOpen) => {
    setPatientOpen(!patientOpen)
    handleSelectedPatient(patientToOpen)
  }

  const patientsFiltered = patients.filter(
    (patient) =>
      patient.archived === false &&
      (patient.lastName.toLowerCase().includes(search.toLowerCase()) ||
        patient.firstName.toLowerCase().includes(search.toLowerCase()))
  )

  const patientsSorted = [...patientsFiltered].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  )

  const MainContextValue = {
    addNewPatient,
    updatePatients,
    toggleAddPatient,
    togglePatient,
    selectedPatient,
    handleSelectedPatient,
    updateLogBook,
  }

  return (
    <MainStyled>
      <MainContext.Provider value={MainContextValue}>
        <Header />
        {addPatient && (
          <>
            <div className="overlay" onClick={toggleAddPatient}></div>
            <AddPatient addNewPatient={addNewPatient} />
          </>
        )}
        {patientOpen && (
          <>
            <div className="overlay" onClick={togglePatient}></div>
            <PatientOpened />
          </>
        )}
        <div className="main-background">
          <TopMainBar
            onChange={(e) => setSearch(e.target.value)}
            onClick={toggleAddPatient}
          />

          <PatientsGrid
            patients={patientsSorted}
            togglePatient={togglePatient}
          />
        </div>
      </MainContext.Provider>
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
    padding: 28px 32px;
    flex: 1;
    box-shadow: inset 0 12px 16px rgba(0, 0, 0, 0.09);
  }
`
