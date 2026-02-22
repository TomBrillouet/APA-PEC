import styled from "styled-components"
import ContactPatient from "./ContactPatient.jsx"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { useContext, useState } from "react"
import Button from "../../../../../../reusable/Button.jsx"
import { usePatientForm } from "../../../../../../../hooks/usePatientForm.jsx"
import BilansPatient from "./BilansPatient.jsx"
import TextArea from "../../../../../../reusable/TextArea.jsx"
import { toastError } from "../../../../../../../datas/toastmessages.js"
import LogBookPatient from "./LogBookPatient.jsx"
import { dateFr } from "../../../../../../../utils/math.js"
//refacto
export default function BodyPatient() {
  const {
    updatePatients,
    selectedPatient,
    setSelectedPatient,
    togglePatient,
    updateLogBook,
  } = useContext(MainContext)
  const [isModifEnabled, setisModifEnabled] = useState(true)
  const [logbookInput, setLogbookInput] = useState("")

  const { inputsValue, handleChange, setInputsValue } =
    usePatientForm(selectedPatient)

  const handleSubmitModification = (patientUpdated) => {
    if (JSON.stringify(patientUpdated) !== JSON.stringify(selectedPatient)) {
      updatePatients(patientUpdated)
      setSelectedPatient(patientUpdated)
    }
    toggleEnable()
  }

  const handleLogBookUpdate = (selectedPatient) => {
    if (logbookInput.trim() !== "") {
      const newEntry = { content: logbookInput, date: dateFr(new Date()) }
      const updatedPatient = {
        ...selectedPatient,
        logbook: [...selectedPatient.logbook, "hr", newEntry],
      }
      updateLogBook(selectedPatient, logbookInput)
      setSelectedPatient(updatedPatient)
      setLogbookInput("")
    }
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
      <LogBookPatient selectedPatient={selectedPatient} />

      <TextArea
        label={"Ajouter au journal de bord"}
        onChange={(e) => setLogbookInput(e.target.value)}
        value={logbookInput}
        name={"logbook"}
        rows={5}
        placeholder={"Contenu des séances hors bilan..."}
      />
      <div className="contact-buttons">
        <div className="actions">
          <Button
            version="cancel"
            label={"Annuler"}
            onClick={togglePatient}
            disabled={!isModifEnabled}
          />
          <Button
            version="submit"
            label={"Enregistrer le journal de bord"}
            onClick={() => handleLogBookUpdate(selectedPatient)}
            disabled={!isModifEnabled}
          />
        </div>
      </div>
    </BodyPatientStyled>
  )
}

const BodyPatientStyled = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px;

  .contact-buttons {
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
