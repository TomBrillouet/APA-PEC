import styled from "styled-components"
import { useForm } from "../../../../../hooks/useForm"
import GeneralTestSection from "./GeneralTestSection"
import ResultsTestSection from "./ResultsTestSection"
import ActionTestSection from "./ActionTestSection"

export default function TestForm({
  testSelected,
  handleChangeTest,
  handleCancel,
}) {
  const { handleChange, inputsValue, handleAddNewTest, handleDeleteTest } =
    useForm(testSelected)

  const handleAddNewResult = (e) => {
    e.preventDefault()
    handleAddNewTest()
  }

  return (
    <TestFormStyled onSubmit={(e) => handleChangeTest(e, inputsValue)}>
      <GeneralTestSection
        inputsValue={inputsValue}
        handleChange={handleChange}
      />
      <hr />
      <ResultsTestSection
        handleChange={handleChange}
        handleDeleteTest={handleDeleteTest}
        inputsValue={inputsValue}
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
