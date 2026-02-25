import styled from "styled-components"
import Input from "../../../../../../reusable/Input"
import TextArea from "../../../../../../reusable/TextArea"

export default function ResultsSection({
  bilanData,
  onChange,
  onRemarquesChange,
  disabled,
}) {
  if (!bilanData.tests) return null

  return (
    <ResultsSectionStyled className="results">
      {bilanData.tests.map((test) => (
        <div key={test.name}>
          <h4>{test.name}</h4>

          <div className="grid-results">
            {test.results.map(({ field, value }) => (
              <Input
                key={field}
                type="number"
                disabled={disabled}
                label={field}
                value={value ? value : ""}
                className="field"
                placeholder={field}
                onChange={(e) => onChange(test.name, field, e.target.value)}
              />
            ))}
          </div>

          <TextArea
            rows={3}
            label="Remarques"
            className="field full"
            disabled={disabled}
            value={test.remarques ?? ""}
            onChange={(e) => onRemarquesChange(test.name, e.target.value)}
            placeholder="Remarques"
          />
        </div>
      ))}
    </ResultsSectionStyled>
  )
}

const ResultsSectionStyled = styled.div`
  .grid-results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`
