import { useContext, useRef, useState } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import GraphResults from "./GraphResults.jsx"
import BilanForm from "./BilanForm/BilanForm.jsx"
import Button from "../../../../../../reusable/Button.jsx"

export default function NewBilan() {
  const [isFinal, setIsFinal] = useState(false)
  const {
    selectedPatient,
    handleSelectedPatient,
    updatePatients,
    toggleNewBilan,
  } = useContext(MainContext)
  const [selectedTests, setSelectedTests] = useState(
    selectedPatient?.bilans[0]?.tests,
  )

  const datasToSubmit = useRef()

  const handleChangeIsFinal = (selectedOption) => {
    setIsFinal(selectedOption.value)
  }

  const handleSubmitBilan = () => {
    const value = datasToSubmit.current.getData()
    const { bilanData, inputsValue } = value
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

  const handleSelectedTests = (testSelected) => {
    const selectedValues = testSelected.map((test) => test.value)
    const testsAndResults = selectedPatient.bilans[0].tests.filter((test) =>
      selectedValues.includes(test.name),
    )
    setSelectedTests(testsAndResults)
  }

  return (
    <div>
      <BilanForm
        ref={datasToSubmit}
        selectedPatient={selectedPatient}
        handleChangeIsFinal={handleChangeIsFinal}
        isFinal={isFinal}
        onTestsChange={handleSelectedTests}
      />
      <GraphResults
        selectedPatient={selectedPatient}
        selectedTests={selectedTests}
      />
      <Button
        label={"Enregistrer le bilan"}
        onClick={() =>
          handleSubmitBilan(
            datasToSubmit.current.getData().bilanData,
            datasToSubmit.current.getData().inputsValue,
          )
        }
        version="submit"
      />
    </div>
  )
}
