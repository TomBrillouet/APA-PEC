import { useBilanForm } from "../../../../../../../../hooks/useBilanForm"
import ImcGraph from "./patientSection/ImcGraph.jsx"
import NewShapeValues from "./patientSection/NewShapeValues.jsx"
import NewImc from "./patientSection/NewImc.jsx"
import TestsFormSection from "../../../AddPatient/Form/TestsFormSection.jsx"
import ResultsSection from "../../../AddPatient/Form/ResultsSection.jsx"
import BilanDate from "./bilanSection/BilanDate.jsx"
import TypeOfBilanSection from "./bilanSection/TypeOfBilanSection.jsx"
import { useForm } from "../../../../../../../../hooks/useForm.jsx"
import { forwardRef, useCallback, useImperativeHandle } from "react"
import ShapeCard from "../../../../../../../reusable/ShapeCard.jsx"
import TypeBilanSection from "./TextAreasSection/TypeBilanSection.jsx"
import { PATIENT_LABELS } from "../../../../../../../../constants/labels/patient.jsx"

const BilanForm = forwardRef(
  (
    { selectedPatient, handleChangeIsFinal, isFinal, onTestsChange, listTests },
    ref,
  ) => {
    const { inputsValue, handleChange } = useForm(selectedPatient)

    const {
      bilanData,
      handleBilanDataChange,
      testsSelectChange,
      handleResultChange,
      handleRemarquesChange,
    } = useBilanForm(selectedPatient?.bilans[0]?.tests, listTests)

    useImperativeHandle(ref, () => ({
      getData: () => ({ bilanData, inputsValue }),
    }))

    const handleTestsChange = useCallback(
      (newTests) => {
        testsSelectChange(newTests)
        onTestsChange(newTests)
      },
      [testsSelectChange, onTestsChange],
    )

    return (
      <>
        <TypeOfBilanSection handleChangeIsFinal={handleChangeIsFinal} />
        <BilanDate
          handleBilanDataChange={handleBilanDataChange}
          bilanData={bilanData}
        />
        <ShapeCard
          dataShape={selectedPatient}
          labels={PATIENT_LABELS.OLD_BILAN_LABELS}
        />
        <NewShapeValues
          handleChange={handleChange}
          handleBilanDataChange={handleBilanDataChange}
        />
        <NewImc bilanData={bilanData} />
        <ImcGraph selectedPatient={selectedPatient} />

        <TypeBilanSection
          type={isFinal ? "final" : "intermediaire"}
          selectedPatient={selectedPatient}
          onChange={handleBilanDataChange}
          bilanData={bilanData}
        />

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
