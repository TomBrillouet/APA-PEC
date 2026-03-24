import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient"
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
      label={PATIENT_LABELS.dateBilan}
      value={bilanData.date}
      name={"date"}
      disabled={disabled}
      max={new Date().toISOString().slice(0, 10)}
    />
  )
}
