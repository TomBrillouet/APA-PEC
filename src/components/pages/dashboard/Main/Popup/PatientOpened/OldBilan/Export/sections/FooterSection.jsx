import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient.jsx"
export default function FooterSection({ pro, className }) {
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
