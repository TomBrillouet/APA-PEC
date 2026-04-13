import styled from "styled-components"
import ContactPatient from "./ContactPatient.js"
import { MainContext } from "../../../../../../../context/MainContext.js"
import { useContext, useState } from "react"
import BilansPatient from "./BilansPatient.js"
import LogBookHistory from "./LogBookHistory.js"
import Logbook from "./Logbook.js"
import { PatientType } from "../../../../../../../types/index.js"

export default function BodyPatient({
  selectedPatient,
}: {
  selectedPatient: PatientType
}) {
  const { updatePatients, handleSelectedPatient, togglePatient } =
    useContext(MainContext)
  const [isModifEnabled, setIsModifEnabled] = useState(true)

  const handleModifEnabled = (value: boolean) => {
    setIsModifEnabled(value)
  }
  const toggleArchived = () => {
    const patientToUpdate = {
      ...selectedPatient,
      archived: !selectedPatient.archived,
    }
    updatePatients(patientToUpdate)
    handleSelectedPatient(patientToUpdate)
    togglePatient(null)
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
