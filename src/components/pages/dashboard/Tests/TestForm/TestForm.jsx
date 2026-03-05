import styled from "styled-components"
import { useForm } from "../../../../../hooks/useForm"
import Input from "../../../../reusable/Input"
import { theme } from "../../../../../theme"
import Button from "../../../../reusable/Button"
import { MdOutlineDeleteOutline } from "react-icons/md"
import GeneralTestSection from "./GeneralTestSection"
import ResultsTestSection from "./ResultsTestSection"

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
      <Button
        label={"Ajouter un résultats attendu"}
        onClick={(e) => handleAddNewResult(e)}
        version="cancel"
      />
      <Button label={"Enregistrer"} version="submit" type="submit" />
      <Button label={"Annuler"} onClick={handleCancel} version={"red"} />
    </TestFormStyled>
  )
}

const TestFormStyled = styled.form`
  background-color: ${theme.colors.background};
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 1em;
`
