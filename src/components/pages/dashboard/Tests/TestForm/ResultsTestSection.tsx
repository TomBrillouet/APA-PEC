import { MdOutlineDeleteOutline } from "react-icons/md"
import styled from "styled-components"
import Input from "../../../../reusable/Input"
import { TESTS_LABELS } from "../../../../../constants/labels/tests"
import { TestType } from "../../../../../types"
import React from "react"

type ResultsTestSectionType = {
  inputsValue: TestType
  onTestDelete: (_index: number) => void
  handleResultModelChange: (
    _e: React.ChangeEvent<HTMLInputElement>,
    _index: number,
  ) => void
}

export default function ResultsTestSection({
  inputsValue,
  onTestDelete,
  handleResultModelChange,
}: ResultsTestSectionType) {
  return inputsValue.results.map((result, index: number) => {
    return (
      <ResultsTestSectionStyled key={index}>
        <MdOutlineDeleteOutline
          className="delete-icon"
          onClick={() => onTestDelete(index)}
        />
        <Input
          name={"field"}
          label={TESTS_LABELS.resultName}
          value={result.field}
          onChange={(e) => handleResultModelChange(e, index)}
          type={"text"}
          isRequired={true}
        />
        <div>
          <input
            type="checkbox"
            name="chart"
            checked={result.chart}
            onChange={(e) => handleResultModelChange(e, index)}
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
