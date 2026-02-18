import styled from "styled-components"
import TextArea from "../../../../../reusable/TextArea.jsx"
import { useState } from "react"
import { EMPTY_PATIENT } from "../../../../../../enums/patient.jsx"
import { identityInputs } from "../config/identityInputs.jsx"
import { contactInputs } from "../config/contactInputs.jsx"
import { medicArea } from "../config/medicArea.jsx"
import Input from "../../../../../reusable/Input.jsx"
import InputSection from "./InputSection.jsx"
import IdentityFormSection from "./IdentityFormSection.jsx"
import TestsFormSection from "./TestsFormSection.jsx"
import FormBottom from "../footer/FormBottom.jsx"

export default function FormAddPatient({ onClose, addNewPatient }) {
  //state
  const [inputsValue, setInputsValue] = useState(EMPTY_PATIENT)
  //comportements

  const handleSubmit = (e) => {
    e.preventDefault()
    const newpatient = { ...inputsValue, id: crypto.randomUUID() }
    addNewPatient(newpatient)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputsValue((prev) => ({
      ...prev,
      [name]: value,
      adress: {
        ...prev.adress,
        [name]: value,
      },
    }))
  }

  const sexSelectChange = (selectedOption) =>
    setInputsValue((prev) => ({
      ...prev,
      sex: selectedOption.value,
    }))

  const testsSelectChange = (selectedOptions) => {
    const values = selectedOptions.map((option) => option.value)

    setInputsValue((prev) => ({
      ...prev,
      tests: values,
    }))
  }

  const mapInputs = (array) => {
    return array.map((input) => (
      <Input
        key={input.name}
        className={"field"}
        label={input.label}
        type={input.type}
        name={input.name}
        onChange={handleChange}
        isRequired={input.isRequired}
        placeholder={input.placeholder}
      />
    ))
  }

  const mapTextArea = (array) => {
    return array.map((textarea) => (
      <TextArea
        onChange={handleChange}
        key={textarea.name}
        name={textarea.name}
        label={textarea.label}
        rows={3}
        className={"field full"}
      />
    ))
  }
  //render
  return (
    <FormAddPatientStyled action="submit" onSubmit={handleSubmit}>
      <IdentityFormSection
        onChange={sexSelectChange}
        datas={mapInputs(identityInputs)}
      />
      <InputSection datas={mapInputs(contactInputs)} label={"Contact"} />
      <InputSection
        datas={mapTextArea(medicArea)}
        label={"Informations médicales"}
      />
      <TestsFormSection onChange={testsSelectChange} />
      <FormBottom onClose={onClose} />
    </FormAddPatientStyled>
  )
}

const FormAddPatientStyled = styled.form`
  padding: 8px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
