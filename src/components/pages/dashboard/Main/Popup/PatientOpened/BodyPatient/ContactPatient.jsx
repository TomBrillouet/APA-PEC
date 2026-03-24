import styled from "styled-components"
import { contactInputs } from "../../AddPatient/config/contactInputs"
import Input from "../../../../../../reusable/Input"
import { useForm } from "../../../../../../../hooks/useForm"
import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import { toastError } from "../../../../../../../datas/toastmessages"
import Button from "../../../../../../reusable/Button"
import { TOAST_LABELS } from "../../../../../../../constants/labels/toasts"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"

export default function ContactPatient({
  isModifEnabled,
  selectedPatient,
  handleModifEnabled,
}) {
  const { handleSelectedPatient, updatePatients } = useContext(MainContext)
  const { inputsValue, handleChange, handleSpecificInputsValue } =
    useForm(selectedPatient)

  const handleSubmitModification = (patientUpdated) => {
    if (JSON.stringify(patientUpdated) !== JSON.stringify(selectedPatient)) {
      updatePatients(patientUpdated)
      handleSelectedPatient(patientUpdated)
    } else {
      toastError(`${TOAST_LABELS.contactNotModified}`)
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
    toastError(`${TOAST_LABELS.contactNotModified}`)
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
            minLength={input.minLength}
            pattern={input.pattern}
          />
        ))}{" "}
      </div>

      <div className="contact-buttons">
        <Button
          version="cancel"
          label={PATIENT_LABELS.modifyContact}
          onClick={toggleEnable}
          disabled={!isModifEnabled}
        />
        <div className="actions">
          <Button
            version="cancel"
            label={PATIENT_LABELS.cancel}
            onClick={cancelContactInputsChange}
            disabled={isModifEnabled}
          />
          <Button
            version="submit"
            label={PATIENT_LABELS.submitModif}
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
