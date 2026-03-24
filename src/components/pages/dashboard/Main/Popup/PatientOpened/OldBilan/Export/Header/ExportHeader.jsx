import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient.jsx"
export default function ExportHeader({ className, selectedBilan }) {
  return (
    <div className={className}>
      <h1>
        {PATIENT_LABELS.bilan} {selectedBilan.type} {PATIENT_LABELS.apa}
      </h1>
      <span>{PATIENT_LABELS.exportTagline} </span>
    </div>
  )
}
