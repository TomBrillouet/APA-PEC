import styled from "styled-components"
import ContactPatient from "./ContactPatient.jsx"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { useContext, useState } from "react"
import Button from "../../../../../../reusable/Button.jsx"
import { usePatientForm } from "../../../../../../../hooks/usePatientForm.jsx"
import BilansPatient from "./BilansPatient.jsx"
import { toastError } from "../../../../../../../datas/toastmessages.js"
import LogBookHistory from "./LogBookHistory.jsx"
import Logbook from "./Logbook.jsx"

export default function BodyPatient() {
  const { updatePatients, selectedPatient, setSelectedPatient, togglePatient } =
    useContext(MainContext)
  const [isModifEnabled, setisModifEnabled] = useState(true)

  const { inputsValue, handleChange, setInputsValue } =
    usePatientForm(selectedPatient)

  const handleSubmitModification = (patientUpdated) => {
    if (JSON.stringify(patientUpdated) !== JSON.stringify(selectedPatient)) {
      updatePatients(patientUpdated)
      setSelectedPatient(patientUpdated)
    }
    toggleEnable()
  }

  const getInputsValue = (name) => {
    const addressFields = ["street", "city", "cp"]
    if (addressFields.includes(name)) return inputsValue.address[name]
    return inputsValue[name]
  }

  const toggleEnable = () => {
    setisModifEnabled(!isModifEnabled)
  }

  const cancelContactInputsChange = () => {
    toggleEnable()
    setInputsValue((prev) => ({ ...prev, logbook: selectedPatient.logbook }))
    toastError("Les informations de contact n'ont pas été enregistrées.")
  }

  return (
    <BodyPatientStyled>
      <ContactPatient
        getInputsValue={getInputsValue}
        handleChange={handleChange}
        selectedPatient={selectedPatient}
        isModifEnabled={isModifEnabled}
      />
      <div className="contact-buttons">
        <Button
          version="submit"
          label={"Modifier les informations de contact"}
          onClick={toggleEnable}
          disabled={!isModifEnabled}
        />
        <div className="actions">
          <Button
            version="cancel"
            label={"Annuler"}
            onClick={cancelContactInputsChange}
            disabled={isModifEnabled}
          />
          <Button
            version="submit"
            label={"Enregistrer les modifications"}
            onClick={() => handleSubmitModification(inputsValue)}
            disabled={isModifEnabled}
          />
        </div>
      </div>
      <BilansPatient selectedPatient={selectedPatient} />
      <LogBookHistory selectedPatient={selectedPatient} />
      <Logbook isModifEnabled={isModifEnabled} togglePatient={togglePatient} />
    </BodyPatientStyled>
  )
}

const BodyPatientStyled = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px;

  .contact-buttons,
  .logbook-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1em;

    .actions {
      display: flex;
      gap: 1em;
    }
  }
`
