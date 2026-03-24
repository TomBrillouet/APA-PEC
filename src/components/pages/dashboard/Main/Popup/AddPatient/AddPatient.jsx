import FormAddPatient from "./Form/FormAddPatient.jsx"
import Popup from "../Popup.jsx"
import { MainContext } from "../../../../../../context/MainContext.jsx"
import { useContext } from "react"
import HeaderPatient from "../HeaderPopup.jsx"
import { PATIENT_LABELS } from "../../../../../../constants/labels/patient.jsx"

export default function AddPatient() {
  const { toggleAddPatient } = useContext(MainContext)
  return (
    <Popup>
      <HeaderPatient
        patientFullName={PATIENT_LABELS.newPatient}
        onClick={toggleAddPatient}
      />
      <FormAddPatient />
    </Popup>
  )
}
