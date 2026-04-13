import styled from "styled-components"
import Input from "../../../../../../reusable/Input"
import TextArea from "../../../../../../reusable/TextArea"
import React, { memo, useContext } from "react"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"
import { BilanType } from "../../../../../../../types"
import { MainContext } from "../../../../../../../context/MainContext"

type ResultsSectionType = {
  bilanData: BilanType
  onRemarquesChange?: (_id: string, _value: string) => void
  disabled?: boolean
  handleChange?: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  inputsValue?: BilanType
  handleResultChange?: (_id: string, _field: string, _value: string) => void
}

function ResultsSection({
  bilanData,
  onRemarquesChange,
  disabled,
  handleChange,
  inputsValue,
  handleResultChange,
}: ResultsSectionType) {
  const { listTests } = useContext(MainContext)

  if (!bilanData.tests) return null
  return (
    <ResultsSectionStyled className="results">
      {bilanData.tests.map((test) => {
        const testName =
          listTests.find((t) => t.id === test.id)?.name || test.name
        return (
          <div key={test.name}>
            <h4>{testName}</h4>
            <div className="grid-results">
              {test?.results?.map(({ field, value }) => (
                <Input
                  key={field}
                  type="number"
                  disabled={disabled}
                  label={field}
                  value={value ?? ""}
                  className="field"
                  placeholder={field}
                  min={0}
                  onChange={(e) =>
                    handleResultChange?.(test.id, field, e.target.value)
                  }
                />
              ))}
            </div>

            <TextArea
              name="remarques"
              rows={3}
              label={PATIENT_LABELS.remarks}
              className="field full"
              disabled={disabled}
              value={test.remarques ?? ""}
              onChange={(e) => onRemarquesChange?.(test.id, e.target.value)}
              placeholder={PATIENT_LABELS.remarks}
            />
          </div>
        )
      })}
      {bilanData.type === "initial" && (
        <TextArea
          rows={3}
          name={"reco"}
          label={PATIENT_LABELS.recommandations}
          className="field full"
          placeholder={PATIENT_LABELS.recommandations}
          onChange={handleChange}
          value={`${inputsValue ? inputsValue.reco : ""}`}
        />
      )}
    </ResultsSectionStyled>
  )
}

const ResultsSectionStyled = styled.div`
  .grid-results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
  }
`
export default memo(ResultsSection)
