import TextArea from "../../../../../../reusable/TextArea.jsx"
import { useContext } from "react"
import { identityInputs } from "../config/identityInputs.jsx"
import { contactInputs } from "../config/contactInputs.jsx"
import { medicArea } from "../config/medicArea.jsx"
import Input from "../../../../../../reusable/Input.jsx"
import IdentityFormSection from "./IdentityFormSection.jsx"
import TestsFormSection from "./TestsFormSection.jsx"
import FormBottom from "../footer/FormBottom.jsx"
import ResultsSection from "./ResultsSection.jsx"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { useForm } from "../../../../../../../hooks/useForm.jsx"
import InputSection from "../../../../../../reusable/InputSection.jsx"
import { EMPTY_PATIENT } from "../../../../../../../enums/patient.jsx"

export default function FormAddPatient() {
  const {
    toggleAddPatient,
    addNewPatient,
    bilanData,
    handleBilanDataChange,
    handleResultChange,
    handleRemarquesChange,
    testsSelectChange,
  } = useContext(MainContext)

  const { inputsValue, sexSelectChange, handleChange } = useForm(EMPTY_PATIENT)

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
        min={input.min}
        max={input.max}
        minLength={input.minLength}
        pattern={input.pattern}
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
    <form action="submit" onSubmit={handleSubmit}>
      <Input
        onChange={handleBilanDataChange}
        type={"date"}
        label={"Date du bilan initial"}
        value={bilanData.date}
        name={"date"}
        min={new Date().toISOString().slice(0, 10)}
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
    </form>
  )
}
