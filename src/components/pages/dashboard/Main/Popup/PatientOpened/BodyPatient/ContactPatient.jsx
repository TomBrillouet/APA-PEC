import styled from "styled-components"
import { contactInputs } from "../../AddPatient/config/contactInputs"
import Input from "../../../../../../reusable/Input"
import { usePatientForm } from "../../../../../../../hooks/usePatientForm"
import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"

export default function ContactPatient({ isModifEnabled }) {
  const { selectedPatient } = useContext(MainContext)
  const { inputsValue, handleChange } = usePatientForm(selectedPatient)

  const getValue = (name) => {
    const addressFields = ["street", "city", "cp"]
    if (addressFields.includes(name)) return inputsValue.address[name]
    return inputsValue[name]
  }

  return (
    <>
      <ContactPatientStyled className="contact-infos">
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
      </ContactPatientStyled>
    </>
  )
}

const ContactPatientStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
`
