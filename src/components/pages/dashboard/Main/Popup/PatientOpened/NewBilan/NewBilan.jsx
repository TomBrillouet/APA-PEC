import { useContext, useState } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import Input from "../../../../../../reusable/Input"
import { identityInputs } from "../../AddPatient/config/identityInputs"
import InputSection from "../../../../../../reusable/InputSection.jsx"
import { getImc } from "../../../../../../../utils/math"
import styled from "styled-components"
import { useBilanForm } from "../../../../../../../hooks/useBilanForm.jsx"
import { BILAN_FIELDS } from "../../../../../../../datas/bilanConfig.js"
import TextArea from "../../../../../../reusable/TextArea.jsx"
import TestsFormSection from "../../AddPatient/Form/TestsFormSection.jsx"
import ResultsSection from "../../AddPatient/Form/ResultsSection.jsx"
import Select from "react-select"
import Button from "../../../../../../reusable/Button.jsx"
import FormSection from "../../AddPatient/Form/FormSection.jsx"
import InputField from "../../../../../../reusable/InputField.jsx"

export default function NewBilan() {
  const [isFinal, setIsFinal] = useState(false)
  const {
    selectedPatient,
    handleSelectedPatient,
    updatePatients,
    toggleNewBilan,
  } = useContext(MainContext)
  const {
    bilanData,
    handleBilanDataChange,
    testsSelectChange,
    handleResultChange,
    handleRemarquesChange,
  } = useBilanForm(selectedPatient.bilans[0].tests)

  const initWeight = selectedPatient.bilans[0].weight
  const initHeight = selectedPatient.bilans[0].height

  const mapInputs = (array) =>
    array.map((input) => {
      if (input.name === "height" || input.name === "weight") {
        return (
          <Input
            key={input.name}
            className={"field"}
            label={input.label}
            type={input.type}
            name={input.name}
            onChange={handleBilanDataChange}
            isRequired={input.isRequired}
            placeholder={input.placeholder}
          />
        )
      }
    })

  const mapTextAreas = (array) =>
    array.map((textarea) => {
      return (
        <TextArea
          name={textarea.name}
          label={textarea.label}
          rows={3}
          onChange={handleBilanDataChange}
          key={textarea.name}
        />
      )
    })

  const assignedTests = () => {
    return selectedPatient.bilans[0].tests.map((test, index) => {
      if (index < selectedPatient.bilans[0].tests.length) {
        return { label: test.name, value: test.name }
      }
    })
  }
  const isFinalOptions = [
    { value: true, label: "Final" },
    { value: false, label: "Intermédiaire" },
  ]

  const handleChangeIsFinal = (selectedOption) => {
    setIsFinal(selectedOption.value)
  }

  const handleSubmitBilan = () => {
    const patientToUpdate = {
      ...selectedPatient,
      bilans: [
        {
          ...bilanData,
          type: isFinal ? "final" : "intermediaire",
          id: crypto.randomUUID(),
        },
        ...selectedPatient.bilans,
      ],
    }
    handleSelectedPatient(patientToUpdate)
    updatePatients(patientToUpdate)
    toggleNewBilan()
  }

  return (
    <NewBilanStyled>
      <FormSection label={"Type de bilan"}>
        <InputField className="field full" label={"Type de bilan"}>
          <Select
            name="isFinal"
            defaultValue={isFinalOptions[1]}
            options={isFinalOptions}
            classNamePrefix="select"
            placeholder="Sélectionner le type de bilan…"
            onChange={handleChangeIsFinal}
            styles={{
              menuList: (base) => ({
                ...base,
                maxHeight: "200px",
                overflowY: "auto",
              }),
            }}
          />
        </InputField>
      </FormSection>
      <Input
        onChange={handleBilanDataChange}
        type={"date"}
        label={"Date du bilan"}
        value={bilanData.date}
        name={"date"}
      />
      <div>Ancien poids : {initWeight}</div>
      <div>Ancienne taille : {initHeight}</div>
      <div>Ancien IMC : {getImc(initWeight, initHeight)}</div>
      <InputSection datas={mapInputs(identityInputs)} />
      <div>
        Nouvel IMC :{" "}
        {bilanData.weight && bilanData.height
          ? getImc(bilanData.weight, bilanData.height)
          : ""}
      </div>

      {!isFinal ? (
        <InputSection
          datas={mapTextAreas(BILAN_FIELDS.intermediaire.textareas)}
        />
      ) : (
        <InputSection datas={mapTextAreas(BILAN_FIELDS.final.textareas)} />
      )}
      <TestsFormSection
        onChange={testsSelectChange}
        defaultValue={assignedTests()}
      />
      <ResultsSection
        bilanData={bilanData}
        onChange={handleResultChange}
        onRemarquesChange={handleRemarquesChange}
      />
      <Button
        label={"Enregistrer le bilan"}
        onClick={handleSubmitBilan}
        version="submit"
      />
    </NewBilanStyled>
  )
}

const NewBilanStyled = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px;
`
