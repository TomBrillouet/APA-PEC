import styled from "styled-components"
import { contactInputs } from "../../AddPatient/config/contactInputs"
import Input from "../../../../../../reusable/Input"
import { usePatientAdd } from "../../../../../../../hooks/usePatientAdd"
import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import { toastError } from "../../../../../../../datas/toastmessages"
import Button from "../../../../../../reusable/Button"

export default function ContactPatient({
  isModifEnabled,
  selectedPatient,
  handleModifEnabled,
}) {
  const { handleSelectedPatient, updatePatients } = useContext(MainContext)
  const { inputsValue, handleChange, handleSpecificInputsValue } =
    usePatientAdd(selectedPatient)

  const handleSubmitModification = (patientUpdated) => {
    if (JSON.stringify(patientUpdated) !== JSON.stringify(selectedPatient)) {
      updatePatients(patientUpdated)
      handleSelectedPatient(patientUpdated)
    }
    toggleEnable()
  }

  const cancelContactInputsChange = () => {
    toggleEnable()
    handleSpecificInputsValue(
      selectedPatient,
      "logbook",
      selectedPatient.logbook,
    )
    toastError("Les informations du contact n'ont pas été modifiées.")
  }

  const toggleEnable = () => {
    handleModifEnabled(!isModifEnabled)
  }

  const getInputsValue = (name) => {
    const addressFields = ["street", "city", "cp"]
    if (addressFields.includes(name)) return inputsValue.address[name]
    return inputsValue[name]
  }

  return (
    <ContactPatientStyled>
      <div className="contact-infos">
        {contactInputs.map((input) => (
          <Input
            key={input.name}
            label={input.label}
            type={input.type}
            name={input.name}
            onChange={handleChange}
            value={getInputsValue(input.name)}
            disabled={isModifEnabled}
          />
        ))}{" "}
      </div>

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
    </ContactPatientStyled>
  )
}

const ContactPatientStyled = styled.div`
  .contact-infos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    column-gap: 20px;
  }
`
