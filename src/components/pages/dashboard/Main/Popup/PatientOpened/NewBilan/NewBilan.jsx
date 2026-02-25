import { useContext, useRef, useState } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import styled from "styled-components"
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

  return (
    <NewBilanStyled>
      <BilanForm
        ref={datasToSubmit}
        selectedPatient={selectedPatient}
        handleChangeIsFinal={handleChangeIsFinal}
        isFinal={isFinal}
        onTestsChange={setSelectedTests}
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
    </NewBilanStyled>
  )
}

const NewBilanStyled = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px;
`
