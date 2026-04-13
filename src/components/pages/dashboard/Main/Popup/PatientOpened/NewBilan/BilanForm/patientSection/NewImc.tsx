import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient"
import { BilanType } from "../../../../../../../../../types"
import { getImc } from "../../../../../../../../../utils/math"

export default function NewImc({ bilanData }: { bilanData: BilanType }) {
  return (
    <div>
      {PATIENT_LABELS.newImc}
      {bilanData.weight && bilanData.height ? (
        <b>{getImc(bilanData.weight, bilanData.height).toFixed(2)}</b>
      ) : (
        ""
      )}
    </div>
  )
}
