import styled from "styled-components"
import { useForm } from "../../../../../hooks/useForm"
import GeneralTestSection from "./GeneralTestSection"
import ResultsTestSection from "./ResultsTestSection"
import ActionTestSection from "./ActionTestSection"
import { ResultType, TestType } from "../../../../../types"
import React from "react"

type TestFormType = {
  testSelected: TestType
  handleChangeTest: (
    _e: React.SubmitEvent<HTMLFormElement>,
    _testChanged: TestType,
  ) => void
  handleCancel: () => void
}

export default function TestForm({
  testSelected,
  handleChangeTest,
  handleCancel,
}: TestFormType) {
  const { handleChange, inputsValue, setInputsValue } = useForm(testSelected)

  const handleAddNewTest = () => {
    setInputsValue((prev: TestType) => {
      return {
        ...prev,
        results: [...prev.results, { field: "", chart: false, value: "" }],
      }
    })
  }

  const handleAddNewResult = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleAddNewTest()
  }

  const handleDeleteTest = (index: number) => {
    setInputsValue((prev: TestType) => {
      return {
        ...prev,
        results: prev.results.filter((_, i: number) => i !== index),
      }
    })
  }

  const handleResultModelChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { name, value, type, checked } = e.target
    const resultsFields = ["field", "chart"]

    if (resultsFields.includes(name)) {
      setInputsValue((prev: TestType) => {
        const isCheckbox = type === "checkbox"
        const updatedResults = prev.results.map(
          (result: ResultType, i: number) => {
            return i === index
              ? { ...result, [name]: isCheckbox ? checked : value }
              : result
          },
        )
        return { ...prev, results: updatedResults }
      })
      return
    }
    handleChange(e)
  }

  return (
    <TestFormStyled onSubmit={(e) => handleChangeTest(e, inputsValue)}>
      <GeneralTestSection
        inputsValue={inputsValue}
        handleChange={handleChange}
      />
      <hr />
      <ResultsTestSection
        inputsValue={inputsValue}
        onTestDelete={handleDeleteTest}
        handleResultModelChange={handleResultModelChange}
      />
      <ActionTestSection
        handleAddNewResult={handleAddNewResult}
        handleCancel={handleCancel}
      />
    </TestFormStyled>
  )
}

const TestFormStyled = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 1em;
`
