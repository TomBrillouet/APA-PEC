import { MdOutlineDeleteOutline } from "react-icons/md"
import styled from "styled-components"
import Input from "../../../../reusable/Input"
import { TESTS_LABELS } from "../../../../../constants/labels/tests"

export default function ResultsTestSection({
  inputsValue,
  handleDeleteTest,
  handleChange,
}) {
  return inputsValue.results.map((result, index) => {
    return (
      <ResultsTestSectionStyled key={index}>
        <MdOutlineDeleteOutline
          className="delete-icon"
          onClick={() => handleDeleteTest(index)}
        />
        <Input
          name={"field"}
          label={TESTS_LABELS.resultName}
          value={result.field}
          onChange={(e) => handleChange(e, index)}
          type={"text"}
          isRequired={true}
        />
        <div>
          <input
            type="checkbox"
            name="chart"
            value={result.chart}
            checked={result.chart}
            onChange={(e) => handleChange(e, index)}
          />
          <label htmlFor="chart">{TESTS_LABELS.chart}</label>
        </div>
      </ResultsTestSectionStyled>
    )
  })
}

const ResultsTestSectionStyled = styled.div`
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
`
