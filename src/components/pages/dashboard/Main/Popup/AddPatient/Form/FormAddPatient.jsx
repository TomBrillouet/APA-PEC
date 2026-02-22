import styled from "styled-components"
import TextArea from "../../../../../../reusable/TextArea.jsx"
import { useContext } from "react"
import { identityInputs } from "../config/identityInputs.jsx"
import { contactInputs } from "../config/contactInputs.jsx"
import { medicArea } from "../config/medicArea.jsx"
import Input from "../../../../../../reusable/Input.jsx"
import InputSection from "./InputSection.jsx"
import IdentityFormSection from "./IdentityFormSection.jsx"
import TestsFormSection from "./TestsFormSection.jsx"
import FormBottom from "../footer/FormBottom.jsx"
import ResultsSection from "./ResultsSection.jsx"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { useBilanForm } from "../../../../../../../hooks/useBilanForm.jsx"
import { usePatientAdd } from "../../../../../../../hooks/usePatientAdd.jsx"

export default function FormAddPatient() {
  const { toggleAddPatient, addNewPatient } = useContext(MainContext)

  const {
    handleResultChange,
    handleRemarquesChange,
    testsSelectChange,
    handleBilanDateChange,
    bilanData,
  } = useBilanForm()
  const { inputsValue, sexSelectChange, handleChange } = usePatientAdd()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPatient = {
      ...inputsValue,
      id: crypto.randomUUID(),
      bilans: [
        {
          id: crypto.randomUUID(),
          type: "initial",
          ...bilanData,
        },
      ],
    }
    addNewPatient(newPatient)
    toggleAddPatient()
  }

  const mapInputs = (array) =>
    array.map((input) => (
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

  const mapTextArea = (array) =>
    array.map((textarea) => (
      <TextArea
        onChange={handleChange}
        key={textarea.name}
        name={textarea.name}
        label={textarea.label}
        rows={3}
        className={"field full"}
      />
    ))

  return (
    <FormAddPatientStyled action="submit" onSubmit={handleSubmit}>
      <Input
        onChange={handleBilanDateChange}
        type={"date"}
        label={"Date du bilan initial"}
        value={bilanData.date}
        name={"date"}
      />
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
        bilanData={bilanData}
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
