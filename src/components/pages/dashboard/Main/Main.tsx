import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import Header from "../Header/Header.js"
import { MainContext } from "../../../../context/MainContext.js"
import { useBilanForm } from "../../../../hooks/useBilanForm.js"
import { useParams } from "react-router"
import { usePopup } from "../../../../hooks/usePopup.js"
import { useTests } from "../../../../hooks/useTests.js"
import { useSelectedBilan } from "../../../../hooks/useSelectedBilan.js"
import { useSelectedPatient } from "../../../../hooks/useSelectedPatient.js"
import { PatientsContext } from "../../../../context/PatientsContext.js"
import TopMainBar from "./TopMainBar/TopMainBar.js"
import PatientsGrid from "./PatientsGrid/PatientsGrid.js"
import Footer from "../Footer/Footer.js"
import AddPatient from "./Popup/AddPatient/AddPatient.js"
import PatientOpened from "./Popup/PatientOpened/PatientOpened.js"
import ProInfo from "./Popup/ProInfo/ProInfo.js"
import { PatientType, ProType } from "../../../../types/index.js"

type MainType = {
  pro: ProType | null
  proSubmit: (_newProInfos: ProType) => void
  patients: PatientType[] | null
  isLoading: boolean
}

export default function Main({
  pro,
  proSubmit,
  patients,
  isLoading,
}: MainType) {
  const [search, setSearch] = useState("")
  const { addNewPatient, updatePatients, updateLogBook } =
    useContext(PatientsContext)
  const { listTests } = useTests()
  const {
    handleBilanDataChange,
    bilanData,
    handleRemarquesChange,
    testsSelectChange,
  } = useBilanForm(null, listTests)
  const { selectedBilan, handleSelectedBilan, toggleOldBilan, closeOldBilan } =
    useSelectedBilan()
  const { selectedPatient, handleSelectedPatient } = useSelectedPatient()
  const {
    toggleProInfo,
    togglePatient,
    toggleNewBilan,
    toggleAddPatient,
    isNewBilan,
    addPatient,
    isProOpen,
  } = usePopup(handleSelectedPatient, closeOldBilan)

  const { status } = useParams()
  const archived = status === "archived"

  const patientsFiltered = () => {
    if (!patients) return null
    return patients.filter(
      (patient: PatientType) =>
        patient.archived === archived &&
        (patient.lastName.toLowerCase().includes(search.toLowerCase()) ||
          patient.firstName.toLowerCase().includes(search.toLowerCase())),
    )
  }

  const patientsSorted = () => {
    const filtered = patientsFiltered()
    if (!filtered) return null
    return [...filtered].sort((a, b) => a.lastName.localeCompare(b.lastName))
  }

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
    handleRemarquesChange,
    testsSelectChange,
    addPatient,
    isProOpen,
    toggleOldBilan,
    handleSelectedBilan,
    selectedBilan,
    pro,
    proSubmit,
    listTests,
    isLoading,
    closeOldBilan,
  }

  const popupConfig = [
    {
      condition: addPatient,
      Content: <AddPatient />,
    },
    {
      condition: selectedPatient !== null,
      Content: <PatientOpened />,
    },
    {
      condition: isProOpen,
      Content: <ProInfo />,
    },
  ]

  const popUpOpened = popupConfig.some((popup) => popup.condition)

  useEffect(() => {
    if (popUpOpened) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [popUpOpened])

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
            patients={patientsSorted()}
            togglePatient={togglePatient}
            archived={archived}
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
