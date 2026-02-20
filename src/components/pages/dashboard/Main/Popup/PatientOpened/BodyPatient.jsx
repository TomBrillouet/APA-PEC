import Input from "../../../../../reusable/Input.jsx"
import { contactInputs } from "../AddPatient/config/contactInputs.jsx"
import styled from "styled-components"
import Button from "../../../../../reusable/Button.jsx"
import { usePatientForm } from "../../../../../../hooks/usePatientForm.jsx"
import { useContext, useState } from "react"
import { MainContext } from "../../../../../../context/MainContext.jsx"

export default function BodyPatient({ selectedPatient }) {
  const { updatePatients } = useContext(MainContext)
  const { inputsValue, handleChange } = usePatientForm(selectedPatient)
  const [isModifEnabled, setisModifEnabled] = useState(true)

  const getValue = (name) => {
    const addressFields = ["street", "city", "cp"]
    if (addressFields.includes(name)) return inputsValue.address[name]
    return inputsValue[name]
  }

  const toggleEnable = () => {
    setisModifEnabled(!isModifEnabled)
  }

  const handleSubmitModification = (patientUpdated) => {
    updatePatients(patientUpdated)
    toggleEnable()
  }

  return (
    <BodyPatientStyled>
      <div className="contact-infos">
        {contactInputs.map((input) => (
          <Input
            key={input.name}
            label={input.label}
            type={input.type}
            name={input.name}
            onChange={handleChange}
            value={getValue(input.name)}
            disabled={isModifEnabled}
          />
        ))}
      </div>
      <Button
        version="submit"
        label={"Modifier les informations de contact"}
        onClick={toggleEnable}
        disabled={!isModifEnabled}
      />
      <Button
        version="submit"
        label={"Enregistrer les modifications"}
        disabled={isModifEnabled}
        onClick={() => handleSubmitModification(inputsValue)}
      />
    </BodyPatientStyled>
  )
}

const BodyPatientStyled = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px;
  .contact-infos {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
  }
  button {
    align-self: flex-end;
  }
`
