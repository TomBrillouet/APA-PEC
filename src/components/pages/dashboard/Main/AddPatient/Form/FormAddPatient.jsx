import styled from "styled-components"
import TextArea from "../../../../../reusable/TextArea.jsx"
import { useContext, useState } from "react"
import { EMPTY_PATIENT } from "../../../../../../enums/patient.jsx"
import { identityInputs } from "../config/identityInputs.jsx"
import { contactInputs } from "../config/contactInputs.jsx"
import { medicArea } from "../config/medicArea.jsx"
import Input from "../../../../../reusable/Input.jsx"
import InputSection from "./InputSection.jsx"
import IdentityFormSection from "./IdentityFormSection.jsx"
import TestsFormSection from "./TestsFormSection.jsx"
import FormBottom from "../footer/FormBottom.jsx"
import ResultsSection from "./ResultsSection.jsx"
import MainContext from "../../../../../../context/MainContext.jsx"

export default function FormAddPatient() {
  //state
  const [inputsValue, setInputsValue] = useState(EMPTY_PATIENT)
  const { toggleAddPatient, addNewPatient } = useContext(MainContext)
  //comportements

  const handleSubmit = (e) => {
    e.preventDefault()
    const newpatient = {
      ...inputsValue,
      id: crypto.randomUUID(),
      fullName: `${inputsValue.firstName} ${inputsValue.lastName}`,
      imc: parseFloat(
        inputsValue.weight / (inputsValue.height / 100) ** 2
      ).toFixed(2),
    }
    console.log(newpatient)
    addNewPatient(newpatient)
    toggleAddPatient()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const adressFields = ["street", "city", "cp"]

    setInputsValue((prev) => {
      if (adressFields.includes(name)) {
        return { ...prev, adress: { ...prev.adress, [name]: value } }
      }
      return { ...prev, [name]: value }
    })
  }

  const sexSelectChange = (selectedOption) =>
    setInputsValue((prev) => ({
      ...prev,
      sex: selectedOption.value,
    }))

  const testsSelectChange = (selectedOptions) => {
    const formattedTests = selectedOptions.map((option) => ({
      name: option.value,
      results: [...option.results],
      remarques: option.remarques ?? "",
    }))

    setInputsValue((prev) => ({
      ...prev,
      tests: formattedTests,
    }))
  }

  const handleRemarquesChange = (testName, value) => {
    setInputsValue((prev) => ({
      ...prev,
      tests: prev.tests.map((test) =>
        test.name === testName ? { ...test, remarques: value } : test
      ),
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

  const handleResultChange = (testName, field, value) => {
    setInputsValue((prev) => ({
      ...prev,
      tests: prev.tests.map((test) =>
        test.name === testName
          ? {
              ...test,
              results: test.results.map((result) =>
                result.field === field ? { ...result, value } : result
              ),
            }
          : test
      ),
    }))
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
      <ResultsSection
        inputsValue={inputsValue}
        onChange={handleResultChange}
        onRemarquesChange={handleRemarquesChange}
      />

      <FormBottom />
    </FormAddPatientStyled>
  )
}

const FormAddPatientStyled = styled.form`
  padding: 8px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
