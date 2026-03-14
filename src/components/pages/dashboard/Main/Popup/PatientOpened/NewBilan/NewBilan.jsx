import { useContext, useRef, useState } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import GraphResults from "./GraphResults.jsx"
import BilanForm from "./BilanForm/BilanForm.jsx"
import Button from "../../../../../../reusable/Button.jsx"
import { useTests } from "../../../../../../../hooks/useTests.jsx"
import Loader from "../../../../../../reusable/Loader.jsx"

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
  const { listTests } = useTests()
  const datasToSubmit = useRef()
  if (!listTests) return <Loader />

  const handleChangeIsFinal = (selectedOption) => {
    setIsFinal(selectedOption.value)
  }

  const handleSubmitBilan = () => {
    const value = datasToSubmit.current.getData()
    const { bilanData, inputsValue } = value
    const patientToUpdate = {
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

  const handleSelectedTests = (testSelected) => {
    const selectedValues = testSelected.map((test) => test.value)
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
      <Button label={"Enregistrer le bilan"} type="submit" version="submit" />
    </form>
  )
}
