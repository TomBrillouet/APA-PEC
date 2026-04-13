import FormAddPatient from "./Form/FormAddPatient.js"
import Popup from "../Popup.js"
import { MainContext } from "../../../../../../context/MainContext.js"
import { useContext } from "react"
import HeaderPopup from "../HeaderPopup.js"
import { PATIENT_LABELS } from "../../../../../../constants/labels/patient.js"

export default function AddPatient() {
  const { toggleAddPatient } = useContext(MainContext)
  return (
    <Popup>
      <HeaderPopup
        patientFullName={PATIENT_LABELS.newPatient}
        onClick={toggleAddPatient}
      />
      <FormAddPatient />
    </Popup>
  )
}
