import { useContext } from "react"
import Popup from "../Popup"
import MainContext from "../../../../../context/MainContext.jsx"
import HeaderPatient from "../HeaderPatient.jsx"

export default function PatientOpened({ patient }) {
  const { togglePatient } = useContext(MainContext)
  return (
    <Popup>
      <HeaderPatient
        patientFullName={`Prise en charge de ${patient.fullName}`}
        onClick={togglePatient}
      />
    </Popup>
  )
}
