import styled from "styled-components"
import { useForm } from "../../../../hooks/useForm"
import Input from "../../../reusable/Input"
import TextArea from "../../../reusable/TextArea"
import { theme } from "../../../../theme"
import Button from "../../../reusable/Button"
import { MdOutlineDeleteOutline } from "react-icons/md"

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
      <Input
        name={"name"}
        label={"Nom du test"}
        type={"text"}
        value={inputsValue.name}
        onChange={handleChange}
      />
      <TextArea
        name={"description"}
        label={"Description"}
        value={inputsValue.description}
        onChange={handleChange}
      />
      <hr />
      {inputsValue.results.map((result, index) => {
        return (
          <div className="result" key={index}>
            <MdOutlineDeleteOutline
              className="delete-icon"
              onClick={() => handleDeleteTest(index)}
            />
            <Input
              name={"field"}
              label={"Nom du résultat"}
              value={result.field}
              onChange={(e) => handleChange(e, index)}
              type={"text"}
              required={result.field === "" ? true : false}
            />
            <div>
              <input
                type="checkbox"
                name="chart"
                value={result.chart}
                checked={result.chart}
                onChange={(e) => handleChange(e, index)}
              />
              <label htmlFor="chart">Avec graphique</label>
            </div>
          </div>
        )
      })}
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

  .result {
    display: flex;
    align-items: flex-end;
    gap: 1em;
    .delete-icon {
      font-size: 25px;
      cursor: pointer;
      &:hover {
        color: #c75b58;
      }
    }
  }
`
