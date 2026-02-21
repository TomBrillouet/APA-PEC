import styled from "styled-components"
import ContactPatient from "./ContactPatient.jsx"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { useContext, useState } from "react"
import Button from "../../../../../../reusable/Button.jsx"
import { usePatientForm } from "../../../../../../../hooks/usePatientForm.jsx"
import BilansPatient from "./BilansPatient.jsx"

export default function BodyPatient() {
  const { updatePatients, selectedPatient } = useContext(MainContext)
  const [isModifEnabled, setisModifEnabled] = useState(true)
  const { inputsValue } = usePatientForm(selectedPatient)

  const handleSubmitModification = (patientUpdated) => {
    updatePatients(patientUpdated)
    toggleEnable()
  }

  const toggleEnable = () => {
    setisModifEnabled(!isModifEnabled)
  }
  return (
    <BodyPatientStyled>
      <ContactPatient
        selectedPatient={selectedPatient}
        isModifEnabled={isModifEnabled}
      />
      <Button
        version="cancel"
        label={"Modifier les informations de contact"}
        onClick={toggleEnable}
        disabled={!isModifEnabled}
      />
      <Button
        version="submit"
        label={"Enregistrer les modifications"}
        onClick={() => handleSubmitModification(inputsValue)}
        disabled={isModifEnabled}
      />
      <BilansPatient selectedPatient={selectedPatient} />
    </BodyPatientStyled>
  )
}

const BodyPatientStyled = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px;

  button {
    align-self: flex-end;
  }
`
