import { useBilanForm } from "../../../../../../../../hooks/useBilanForm"
import ImcGraph from "./patientSection/ImcGraph.js"
import NewShapeValues from "./patientSection/NewShapeValues.js"
import NewImc from "./patientSection/NewImc.js"
import TestsFormSection from "../../../AddPatient/Form/TestsFormSection.js"
import ResultsSection from "../../../AddPatient/Form/ResultsSection.js"
import BilanDate from "./bilanSection/BilanDate.js"
import TypeOfBilanSection from "./bilanSection/TypeOfBilanSection.js"
import { useForm } from "../../../../../../../../hooks/useForm.js"
import { forwardRef, useCallback, useImperativeHandle } from "react"
import ShapeCard from "../../../../../../../reusable/ShapeCard.js"
import TypeBilanSection from "./TextAreasSection/TypeBilanSection.js"
import { PATIENT_LABELS } from "../../../../../../../../constants/labels/patient.js"
import {
  BilanFormHandle,
  ListTestsType,
  PatientType,
} from "../../../../../../../../types"
import { SingleValue } from "react-select"

type BilanFormType = {
  selectedPatient: PatientType
  handleChangeIsFinal: (
    _selectedOption: SingleValue<{
      value: boolean
      label: string
    }>,
  ) => void
  isFinal: boolean
  onTestsChange: (
    _testSelected: readonly { value: string; label: string }[],
  ) => void
  listTests: ListTestsType
}

const BilanForm = forwardRef<BilanFormHandle, BilanFormType>(
  (
    {
      selectedPatient,
      handleChangeIsFinal,
      isFinal,
      onTestsChange,
      listTests,
    }: BilanFormType,
    ref,
  ) => {
    const { inputsValue, handleChange } = useForm(selectedPatient)

    const {
      bilanData,
      handleBilanDataChange,
      testsSelectChange,
      handleRemarquesChange,
      handleResultChange,
    } = useBilanForm(selectedPatient.bilans[0].tests, listTests)

    useImperativeHandle(ref, () => ({
      getData: () => ({ bilanData, inputsValue }),
    }))

    const handleTestsChange = useCallback(
      (newTests: readonly { value: string; label: string }[]) => {
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
          onRemarquesChange={handleRemarquesChange}
          handleResultChange={handleResultChange}
        />
      </>
    )
  },
)

export default BilanForm
