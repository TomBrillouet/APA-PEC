import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient"
import { getImc } from "../../../../../../../../../utils/math"

export default function NewImc({ bilanData }) {
  return (
    <div>
      {PATIENT_LABELS.newImc}
      {bilanData.weight && bilanData.height ? (
        <b>{getImc(bilanData.weight, bilanData.height)}</b>
      ) : (
        ""
      )}
    </div>
  )
}
