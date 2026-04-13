import { useContext, useRef, useState } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import GraphResults from "./GraphResults.js"
import BilanForm from "./BilanForm/BilanForm.js"
import Button from "../../../../../../reusable/Button.js"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient.js"
import { BilanFormHandle, PatientType } from "../../../../../../../types"
import { SingleValue } from "react-select"

export default function NewBilan({
  selectedPatient,
}: {
  selectedPatient: PatientType
}) {
  const [isFinal, setIsFinal] = useState(false)
  const { handleSelectedPatient, updatePatients, toggleNewBilan, listTests } =
    useContext(MainContext)
  const [selectedTests, setSelectedTests] = useState(
    selectedPatient.bilans[0]?.tests,
  )
  const datasToSubmit = useRef<BilanFormHandle>(null)

  const handleChangeIsFinal = (
    selectedOption: SingleValue<{
      value: boolean
      label: string
    }>,
  ) => {
    if (!selectedOption) return
    setIsFinal(selectedOption.value)
  }

  const handleSubmitBilan = () => {
    const value = datasToSubmit.current?.getData()
    if (!value) return
    const { bilanData, inputsValue } = value
    const patientToUpdate: PatientType = {
      ...inputsValue,
      archived: isFinal,
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

  const handleSelectedTests = (
    testSelected: readonly { value: string; label: string }[],
  ) => {
    const selectedValues = testSelected.map(
      (test: { value: string; label: string }) => test.value,
    )
    const testsAndResults = selectedPatient.bilans[0].tests.filter((test) =>
      selectedValues.includes(test.name),
    )
    setSelectedTests(testsAndResults)
  }

  return (
    <form onSubmit={() => handleSubmitBilan()}>
      <BilanForm
        ref={datasToSubmit}
        selectedPatient={selectedPatient}
        handleChangeIsFinal={handleChangeIsFinal}
        isFinal={isFinal}
        onTestsChange={handleSelectedTests}
        listTests={listTests}
      />
      <GraphResults
        selectedPatient={selectedPatient}
        selectedTests={selectedTests}
      />
      <Button
        label={PATIENT_LABELS.submitBilan}
        type="submit"
        version="submit"
      />
    </form>
  )
}
