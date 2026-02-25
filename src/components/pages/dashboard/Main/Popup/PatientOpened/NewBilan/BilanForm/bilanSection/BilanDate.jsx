import Input from "../../../../../../../../reusable/Input"

export default function BilanDate({ handleBilanDataChange, bilanData }) {
  return (
    <Input
      onChange={handleBilanDataChange}
      type={"date"}
      label={"Date du bilan"}
      value={bilanData.date}
      name={"date"}
    />
  )
}
