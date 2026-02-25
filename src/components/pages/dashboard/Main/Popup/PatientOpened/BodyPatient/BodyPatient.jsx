import styled from "styled-components"
import ContactPatient from "./ContactPatient.jsx"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { useContext, useState } from "react"
import BilansPatient from "./BilansPatient.jsx"
import LogBookHistory from "./LogBookHistory.jsx"
import Logbook from "./Logbook.jsx"
import FooterPatient from "./FooterPatient.jsx"

export default function BodyPatient() {
  const { selectedPatient } = useContext(MainContext)
  const [isModifEnabled, setIsModifEnabled] = useState(true)

  const handleModifEnabled = (value) => {
    setIsModifEnabled(value)
  }

  return (
    <BodyPatientStyled>
      <ContactPatient
        selectedPatient={selectedPatient}
        isModifEnabled={isModifEnabled}
        handleModifEnabled={handleModifEnabled}
      />
      <BilansPatient selectedPatient={selectedPatient} />
      <LogBookHistory selectedPatient={selectedPatient} />
      <Logbook isModifEnabled={isModifEnabled} />
      <FooterPatient />
    </BodyPatientStyled>
  )
}

const BodyPatientStyled = styled.div`
  display: flex;
  padding: 25px;
  flex-direction: column;
  gap: 15px;

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
