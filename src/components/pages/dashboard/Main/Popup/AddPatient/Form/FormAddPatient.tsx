import TextArea from "../../../../../../reusable/TextArea"
import React, { useContext } from "react"
import { identityInputs } from "../config/identityInputs"
import { contactInputs } from "../config/contactInputs"
import Input from "../../../../../../reusable/Input"
import IdentityFormSection from "./IdentityFormSection"
import TestsFormSection from "./TestsFormSection"
import FormBottom from "../footer/FormBottom"
import ResultsSection from "./ResultsSection"
import { MainContext } from "../../../../../../../context/MainContext"
import { useForm } from "../../../../../../../hooks/useForm"
import InputSection from "../../../../../../reusable/InputSection"
import { EMPTY_PATIENT } from "../../../../../../../constants/models/patient"
import { BILAN_FIELDS } from "../../../../../../../datas/bilanConfig"
import { useBilanForm } from "../../../../../../../hooks/useBilanForm"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"
import { inputsType } from "../../../../../../../types"
import { SingleValue } from "react-select"

export default function FormAddPatient() {
  const { toggleAddPatient, addNewPatient, listTests } = useContext(MainContext)

  const {
    bilanData,
    handleBilanDataChange,
    handleRemarquesChange,
    testsSelectChange,
    handleResultChange,
  } = useBilanForm(null, listTests)

  const { inputsValue, handleChange, setInputsValue } = useForm(EMPTY_PATIENT)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPatient = {
      ...inputsValue,
      id: crypto.randomUUID(),
      bilans: [
        {
          ...bilanData,
          id: crypto.randomUUID(),
          type: "initial" as const,
        },
      ],
    }
    addNewPatient(newPatient)
    toggleAddPatient()
  }

  const mapInputs = (array: inputsType) =>
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

  const sexSelectChange = (
    sexSelected: SingleValue<{
      value: string
      label: string
    }>,
  ) => {
    if (!sexSelected) return
    setInputsValue((prev) => ({ ...prev, sex: sexSelected.value }))
  }

  const mapTextArea = (array: { label: string; name: string }[]) =>
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
        label={PATIENT_LABELS.date}
        value={bilanData.date}
        name={"date"}
        max={new Date().toISOString().slice(0, 10)}
      />
      <IdentityFormSection
        datas={mapInputs(identityInputs)}
        onSexChange={sexSelectChange}
      />
      <InputSection
        datas={mapInputs(contactInputs)}
        label={PATIENT_LABELS.contact}
      />
      <InputSection
        datas={mapTextArea(BILAN_FIELDS.initial.textareas)}
        label={PATIENT_LABELS.medicInfos}
      />
      <TestsFormSection onChange={testsSelectChange} />
      <ResultsSection
        bilanData={bilanData}
        onRemarquesChange={handleRemarquesChange}
        handleResultChange={handleResultChange}
      />
      <FormBottom />
    </form>
  )
}
