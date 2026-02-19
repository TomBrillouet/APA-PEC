import Input from "../../../../../reusable/Input"
import TextArea from "../../../../../reusable/TextArea"

export default function ResultsSection({
  inputsValue,
  onChange,
  onRemarquesChange,
}) {
  if (!inputsValue.tests) return null

  return (
    <div className="results">
      {inputsValue.tests.map((test) => (
        <div key={test.name}>
          <h4>{test.name}</h4>

          {test.results.map(({ field, value }) => (
            <Input
              key={field}
              type="number"
              label={field}
              value={value}
              className="field"
              placeholder={field}
              onChange={(e) => onChange(test.name, field, e.target.value)}
            />
          ))}

          <TextArea
            rows={3}
            label="Remarques"
            className="field full"
            value={test.remarques ?? ""}
            onChange={(e) => onRemarquesChange(test.name, e.target.value)}
            placeholder="Remarques"
          />
        </div>
      ))}
    </div>
  )
}
