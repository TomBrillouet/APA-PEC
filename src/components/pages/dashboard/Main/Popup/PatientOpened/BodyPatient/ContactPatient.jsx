import styled from "styled-components"
import { contactInputs } from "../../AddPatient/config/contactInputs"
import Input from "../../../../../../reusable/Input"

export default function ContactPatient({
  isModifEnabled,
  getInputsValue,
  handleChange,
}) {
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
            value={getInputsValue(input.name)}
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
