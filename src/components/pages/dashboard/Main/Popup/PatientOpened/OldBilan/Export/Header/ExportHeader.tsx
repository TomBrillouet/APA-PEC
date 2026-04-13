import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient.js"
import { BilanType } from "../../../../../../../../../types/index.js"

type ExportHeaderType = {
  className: string
  selectedBilan: BilanType
}

export default function ExportHeader({
  className,
  selectedBilan,
}: ExportHeaderType) {
  return (
    <div className={className}>
      <h1>
        {PATIENT_LABELS.bilan} {selectedBilan.type} {PATIENT_LABELS.apa}
      </h1>
      <span>{PATIENT_LABELS.exportTagline} </span>
    </div>
  )
}
