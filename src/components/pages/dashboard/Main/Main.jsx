import styled from "styled-components"
import { useState } from "react"
import Header from "../Header/Header.jsx"
import { MainContext } from "../../../../context/MainContext.jsx"
import PatientsGrid from "./PatientsGrid.jsx"
import TopMainBar from "./TopMainBar.jsx"
import { usePatients } from "../../../../hooks/usePatients.jsx"
import PatientOpened from "./Popup/PatientOpened/PatientOpened.jsx"
import AddPatient from "./Popup/AddPatient/AddPatient.jsx"
import ProInfo from "./Popup/ProInfo/ProInfo.jsx"
import { useBilanForm } from "../../../../hooks/useBilanForm.jsx"
import { theme } from "../../../../theme/index.js"
import { fakePro } from "../../../../datas/fakePro.js"
import { useParams } from "react-router"

export default function Main() {
  const [addPatient, setAddPatient] = useState(false)
  const [patientOpen, setPatientOpen] = useState(false)
  const [pro, setPro] = useState(fakePro)
  const [proInfo, setProInfo] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [selectedBilan, setSelectedBilan] = useState(null)
  const [search, setSearch] = useState("")
  const [isNewBilan, setIsNewBilan] = useState(false)
  const [isOldBilanOpened, setIsOldBilanOpened] = useState(false)
  const { addNewPatient, updatePatients, patients, updateLogBook } =
    usePatients()
  const {
    handleBilanDataChange,
    bilanData,
    handleResultChange,
    handleRemarquesChange,
    testsSelectChange,
  } = useBilanForm()

  const { status } = useParams()
  const archived = status === "archived"

  const toggleAddPatient = () => {
    setAddPatient(!addPatient)
  }

  const toggleProInfo = () => {
    setProInfo(!proInfo)
  }

  const proSubmit = (newProInfos) => {
    setPro(newProInfos)
  }

  const togglePatient = (patientToOpen) => {
    setPatientOpen(!patientOpen)
    handleSelectedPatient(patientToOpen)
    setIsNewBilan(false)
    setIsOldBilanOpened(false)
  }

  const toggleNewBilan = () => {
    setIsNewBilan(!isNewBilan)
  }

  const toggleOldBilan = () => {
    setIsOldBilanOpened(!isOldBilanOpened)
  }

  const handleSelectedPatient = (selectedPatient) => {
    setSelectedPatient(selectedPatient)
  }

  const handleSelectedBilan = (selectedBilan) => {
    setSelectedBilan(selectedBilan)
  }

  const patientsFiltered = patients.filter(
    (patient) =>
      patient.archived === archived &&
      (patient.lastName.toLowerCase().includes(search.toLowerCase()) ||
        patient.firstName.toLowerCase().includes(search.toLowerCase())),
  )

  const patientsSorted = [...patientsFiltered].sort((a, b) =>
    a.lastName.localeCompare(b.lastName),
  )

  const MainContextValue = {
    addNewPatient,
    updatePatients,
    toggleAddPatient,
    togglePatient,
    toggleProInfo,
    toggleNewBilan,
    isNewBilan,
    selectedPatient,
    handleSelectedPatient,
    handleBilanDataChange,
    updateLogBook,
    bilanData,
    handleResultChange,
    handleRemarquesChange,
    testsSelectChange,
    isOldBilanOpened,
    toggleOldBilan,
    handleSelectedBilan,
    selectedBilan,
    pro,
    proSubmit,
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
        {proInfo && (
          <>
            <div className="overlay" onClick={toggleProInfo}></div>
            <ProInfo />
          </>
        )}
        <div className="main-background">
          <TopMainBar
            onChange={(e) => setSearch(e.target.value)}
            onClick={toggleAddPatient}
            archived={archived}
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
  background-color: ${theme.colors.background};

  .overlay {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 1;
    background-color: #1e2a3878;
  }

  .main-background {
    padding: 28px 32px;
    flex: 1;
    box-shadow: inset 0 12px 16px rgba(0, 0, 0, 0.09);
  }
`
