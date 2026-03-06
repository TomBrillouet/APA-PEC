import Input from "../../../../../../../../reusable/Input"

export default function BilanDate({
  handleBilanDataChange,
  bilanData,
  disabled,
}) {
  return (
    <Input
      onChange={handleBilanDataChange}
      type={"date"}
      label={"Date du bilan"}
      value={bilanData.date}
      name={"date"}
      disabled={disabled}
      max={new Date().toISOString().slice(0, 10)}
    />
  )
}
