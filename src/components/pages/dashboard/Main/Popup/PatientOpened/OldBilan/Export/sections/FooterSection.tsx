import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient.js"
import { ProType } from "../../../../../../../../../types/index.js"
type FooterSectionType = {
  pro: ProType | null
  className: string
}
export default function FooterSection({ pro, className }: FooterSectionType) {
  if (!pro) return null
  return (
    <footer className={className}>
      <p>{PATIENT_LABELS.startCare}</p>
      <hr />
      <div className="center">
        <p>{PATIENT_LABELS.thanks}</p>
        <p>
          <em>
            {PATIENT_LABELS.documentInfo}
            {pro.firstName} {pro.lastName}
          </em>
        </p>
      </div>
    </footer>
  )
}
