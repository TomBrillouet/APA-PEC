import styled from "styled-components"
import { useContext, useState } from "react"
import Header from "../Header/Header.jsx"
import { MainContext } from "../../../../context/MainContext.jsx"
import { useBilanForm } from "../../../../hooks/useBilanForm.jsx"
import { useParams } from "react-router"
import { usePopup } from "../../../../hooks/usePopup.jsx"
import Loader from "../../../reusable/Loader.jsx"
import { useTests } from "../../../../hooks/useTests.jsx"
import { useSelectedBilan } from "../../../../hooks/useSelectedBilan.jsx"
import { useSelectedPatient } from "../../../../hooks/useSelectedPatient.jsx"
import { PatientsContext } from "../../../../context/PatientsContext.jsx"
import TopMainBar from "./TopMainBar/TopMainBar.jsx"
import PatientsGrid from "./PatientsGrid/PatientsGrid.jsx"
import Footer from "../Footer/Footer.jsx"

export default function Main({ pro, proSubmit, patients }) {
  const [search, setSearch] = useState("")

  const { addNewPatient, updatePatients, updateLogBook } =
    useContext(PatientsContext)
  const { listTests } = useTests()
  const {
    handleBilanDataChange,
    bilanData,
    handleResultChange,
    handleRemarquesChange,
    testsSelectChange,
  } = useBilanForm(null, listTests)
  const {
    toggleProInfo,
    togglePatient,
    toggleNewBilan,
    toggleOldBilan,
    toggleAddPatient,
    isNewBilan,
    isOldBilanOpened,
    popupConfig,
  } = usePopup()
  const { selectedBilan, handleSelectedBilan } = useSelectedBilan()
  const { selectedPatient, handleSelectedPatient } = useSelectedPatient()

  const { status } = useParams()
  const archived = status === "archived"
  if (!patients || !pro)
    return (
      <MainStyled>
        <Loader />
      </MainStyled>
    )

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
    listTests,
  }

  return (
    <MainStyled>
      <MainContext.Provider value={MainContextValue}>
        <Header />
        {popupConfig.map(
          (popup, index) =>
            popup.condition && (
              <div key={index}>
                <div className="overlay"></div>
                {popup.Content}
              </div>
            ),
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
        <Footer />
      </MainContext.Provider>
    </MainStyled>
  )
}

const MainStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

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
    padding: 28px 15px 28px 0px;
    flex: 1;
  }
`
