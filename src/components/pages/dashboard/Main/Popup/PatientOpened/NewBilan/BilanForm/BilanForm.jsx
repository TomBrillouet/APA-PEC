import { useBilanForm } from "../../../../../../../../hooks/useBilanForm"
import TextArea from "../../../../../../../reusable/TextArea.jsx"
import ImcGraph from "./patientSection/ImcGraph.jsx"
import NewShapeValues from "./patientSection/NewShapeValues.jsx"
import NewImc from "./patientSection/NewImc.jsx"
import FinalSection from "./questionsSection/FinalSection.jsx"
import IntermediarySection from "./questionsSection/IntermediarySection.jsx"
import TestsFormSection from "../../../AddPatient/Form/TestsFormSection.jsx"
import ResultsSection from "../../../AddPatient/Form/ResultsSection.jsx"
import BilanDate from "./bilanSection/BilanDate.jsx"
import TypeOfBilanSection from "./bilanSection/TypeOfBilanSection.jsx"
import PreviousShapeValues from "./patientSection/PreviousShapeValues.jsx"
import { usePatientAdd } from "../../../../../../../../hooks/usePatientAdd.jsx"
import { forwardRef, useImperativeHandle } from "react"

const BilanForm = forwardRef(
  ({ selectedPatient, handleChangeIsFinal, isFinal, onTestsChange }, ref) => {
    const { inputsValue, handleChange } = usePatientAdd(selectedPatient)
    const {
      bilanData,
      handleBilanDataChange,
      testsSelectChange,
      handleResultChange,
      handleRemarquesChange,
    } = useBilanForm(selectedPatient?.bilans[0]?.tests)

    useImperativeHandle(ref, () => ({
      getData: () => ({ bilanData, inputsValue }),
    }))

    const handleTestsChange = (newTests) => {
      testsSelectChange(newTests)
      onTestsChange(newTests)
    }
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
    return (
      <>
        <TypeOfBilanSection handleChangeIsFinal={handleChangeIsFinal} />
        <BilanDate
          handleBilanDataChange={handleBilanDataChange}
          bilanData={bilanData}
        />
        <PreviousShapeValues selectedPatient={selectedPatient} />
        <NewShapeValues
          handleChange={handleChange}
          handleBilanDataChange={handleBilanDataChange}
        />
        <NewImc bilanData={bilanData} />
        <ImcGraph selectedPatient={selectedPatient} />

        {isFinal ? (
          <FinalSection mapTextAreas={mapTextAreas} />
        ) : (
          <IntermediarySection mapTextAreas={mapTextAreas} />
        )}
        <TestsFormSection
          onChange={handleTestsChange}
          selectedPatient={selectedPatient}
        />
        <ResultsSection
          bilanData={bilanData}
          onChange={handleResultChange}
          onRemarquesChange={handleRemarquesChange}
        />
      </>
    )
  },
)

export default BilanForm
