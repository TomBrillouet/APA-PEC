import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import Header from "../Header/Header.jsx"
import { MainContext } from "../../../../context/MainContext.jsx"
import PatientsGrid from "./PatientsGrid.jsx"
import TopMainBar from "./TopMainBar.jsx"
import { useBilanForm } from "../../../../hooks/useBilanForm.jsx"
import { theme } from "../../../../theme/index.js"
import { useParams } from "react-router"
import { usePopup } from "../../../../hooks/usePopup.jsx"
import { useAuth } from "../../../../context/AuthContext.jsx"
import { initialisePro } from "./helpers/initialiseUserSession"
import Loader from "../../../reusable/Loader.jsx"
import { usePro } from "../../../../hooks/usePro.jsx"
import { useTests } from "../../../../hooks/useTests.jsx"
import { useSelectedBilan } from "../../../../hooks/useSelectedBilan.jsx"
import { useSelectedPatient } from "../../../../hooks/useSelectedPatient.jsx"
import { PatientsContext } from "../../../../context/PatientsContext.jsx"

export default function Main() {
  const { currentUser } = useAuth()
  const userId = currentUser?.uid
  const [search, setSearch] = useState("")

  const { addNewPatient, updatePatients, patients, updateLogBook } =
    useContext(PatientsContext)
  const { listTests } = useTests()
  const {
    handleBilanDataChange,
    bilanData,
    handleResultChange,
    handleRemarquesChange,
    testsSelectChange,
  } = useBilanForm(null, listTests)
  const { pro, setPro, proSubmit } = usePro()
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

  useEffect(() => {
    if (!userId) return
    initialisePro(userId, setPro)
  }, [userId])

  const { status } = useParams()
  const archived = status === "archived"
  if (!patients) return <Loader />

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

  @media screen and (max-width: 768px) {
    .main-background {
      padding: 14px;
    }
  }
`
