import styled from "styled-components"
import Input from "../../../../../../reusable/Input"
import TextArea from "../../../../../../reusable/TextArea"
import { memo } from "react"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"

function ResultsSection({
  bilanData,
  onChange,
  onRemarquesChange,
  disabled,
  handleChange,
  inputsValue,
}) {
  if (!bilanData.tests) return null

  return (
    <ResultsSectionStyled className="results">
      {bilanData.tests.map((test) => (
        <div key={test.name}>
          <h4>{test.name}</h4>

          <div className="grid-results">
            {test?.results?.map(({ field, value }) => (
              <Input
                key={field}
                type="number"
                disabled={disabled}
                label={field}
                value={value ? value : ""}
                className="field"
                placeholder={field}
                min={0}
                onChange={(e) => onChange(test.name, field, e.target.value)}
              />
            ))}
          </div>

          <TextArea
            rows={3}
            label={PATIENT_LABELS.remarks}
            className="field full"
            disabled={disabled}
            value={test.remarques ?? ""}
            onChange={(e) => onRemarquesChange(test.name, e.target.value)}
            placeholder={PATIENT_LABELS.remarks}
          />
        </div>
      ))}
      {bilanData.type === "initial" && (
        <TextArea
          rows={3}
          name={"reco"}
          label={PATIENT_LABELS.recommandations}
          className="field full"
          placeholder={PATIENT_LABELS.recommandations}
          onChange={handleChange}
          value={inputsValue.reco}
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
