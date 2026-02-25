import { useContext, useState } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import Input from "../../../../../../reusable/Input"
import { identityInputs } from "../../AddPatient/config/identityInputs"
import InputSection from "../../../../../../reusable/InputSection.jsx"
import { getImc } from "../../../../../../../utils/math"
import styled from "styled-components"
import { BILAN_FIELDS } from "../../../../../../../datas/bilanConfig.js"
import TextArea from "../../../../../../reusable/TextArea.jsx"
import TestsFormSection from "../../AddPatient/Form/TestsFormSection.jsx"
import ResultsSection from "../../AddPatient/Form/ResultsSection.jsx"
import Select from "react-select"
import Button from "../../../../../../reusable/Button.jsx"
import FormSection from "../../AddPatient/Form/FormSection.jsx"
import InputField from "../../../../../../reusable/InputField.jsx"
import SimpleLineGraph from "./SimpleLineGraph.jsx"
import { usePatientAdd } from "../../../../../../../hooks/usePatientAdd.jsx"
import { useBilanForm } from "../../../../../../../hooks/useBilanForm.jsx"

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
  } = useBilanForm(selectedPatient?.bilans[0]?.tests)

  const { inputsValue, handleChange } = usePatientAdd(selectedPatient)

  const initWeight = selectedPatient.weight
  const initHeight = selectedPatient.height

  const dataImc = selectedPatient.bilans
    .slice()
    .reverse()
    .filter((bilan) => bilan.height && bilan.weight)
    .map((bilan) => {
      return {
        date: bilan.date,
        imc: getImc(bilan.weight, bilan.height),
      }
    })

  const dataResults = (testName, resultField) => {
    return selectedPatient.bilans
      .slice()
      .reverse()
      .filter((bilan) => {
        const test = bilan.tests.find((test) => test.name === testName)
        const result = test?.results.find(
          (result) => result.field === resultField && result.value !== "",
        )

        return result !== undefined
      })
      .map((bilan) => {
        const test = bilan.tests.find((test) => test.name === testName)
        const result = test.results.find(
          (result) => result.field === resultField && result.value !== "",
        )

        return {
          date: bilan.date,
          [resultField]: result.value,
        }
      })
  }

  const handleChangeBoth = (e) => {
    handleChange(e)
    handleBilanDataChange(e)
  }

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
            onChange={handleChangeBoth}
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
      ...inputsValue,
      bilans: [
        {
          ...bilanData,
          type: isFinal ? "final" : "intermediaire",
          id: crypto.randomUUID(),
        },
        ...inputsValue.bilans,
      ],
    }
    handleSelectedPatient(patientToUpdate)
    updatePatients(patientToUpdate)
    toggleNewBilan()
  }

  const graphResults = bilanData.tests.map((test) => {
    const resultsWithGraph = test.results.filter((result) => result.chart)

    return resultsWithGraph.map((result) => (
      <SimpleLineGraph
        key={test.name + result.field}
        data={dataResults(test.name, result.field)}
        legend={`${test.name} - ${result.field}`}
        x="date"
        y={result.field}
      />
    ))
  })

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
      <div className="old-values">
        <div>Dernier poids connu : {initWeight}</div>
        <div>Dernière taille connue : {initHeight}</div>
        <div>Dernier IMC connu : {getImc(initWeight, initHeight)}</div>
      </div>
      <InputSection datas={mapInputs(identityInputs)} />
      <div>
        Nouvel IMC :{" "}
        {bilanData.weight && bilanData.height
          ? getImc(bilanData.weight, bilanData.height)
          : ""}
      </div>
      <SimpleLineGraph
        data={dataImc}
        x="date"
        y="imc"
        legend={"IMC"}
        width={"80%"}
      />

      {!isFinal ? (
        <InputSection
          datas={mapTextAreas(BILAN_FIELDS.intermediaire.textareas)}
          label={"Développement du patient"}
          block
        />
      ) : (
        <InputSection
          datas={mapTextAreas(BILAN_FIELDS.final.textareas)}
          label={"Développement du patient"}
          block
        />
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
      {graphResults}
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

  .old-values {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
`
