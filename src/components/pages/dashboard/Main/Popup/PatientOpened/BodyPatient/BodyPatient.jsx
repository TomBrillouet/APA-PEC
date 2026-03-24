import styled from "styled-components"
import ContactPatient from "./ContactPatient.jsx"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { useContext, useState } from "react"
import BilansPatient from "./BilansPatient.jsx"
import LogBookHistory from "./LogBookHistory.jsx"
import Logbook from "./Logbook.jsx"

export default function BodyPatient() {
  const {
    selectedPatient,
    updatePatients,
    handleSelectedPatient,
    togglePatient,
  } = useContext(MainContext)
  const [isModifEnabled, setIsModifEnabled] = useState(true)

  const handleModifEnabled = (value) => {
    setIsModifEnabled(value)
  }
  const toggleArchived = () => {
    const patientToUpdate = {
      ...selectedPatient,
      archived: !selectedPatient.archived,
    }
    updatePatients(patientToUpdate)
    handleSelectedPatient(patientToUpdate)
    togglePatient()
  }

  return (
    <BodyPatientStyled>
      <ContactPatient
        selectedPatient={selectedPatient}
        isModifEnabled={isModifEnabled}
        handleModifEnabled={handleModifEnabled}
      />
      <BilansPatient
        selectedPatient={selectedPatient}
        toggleArchived={toggleArchived}
      />
      <LogBookHistory selectedPatient={selectedPatient} />
      <Logbook isModifEnabled={isModifEnabled} />
    </BodyPatientStyled>
  )
}

const BodyPatientStyled = styled.div`
  .contact-buttons,
  .logbook-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1em;
    padding-top: 20px;

    .actions {
      display: flex;
      gap: 1em;
    }
  }
`
