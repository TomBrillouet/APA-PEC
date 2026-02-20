import { useContext } from "react"
import Popup from "../Popup.jsx"
import { MainContext } from "../../../../../../context/MainContext.jsx"
import HeaderPatient from "../HeaderPopup.jsx"
import BodyPatient from "./BodyPatient.jsx"
import { getAge } from "../../../../../../utils/math.js"

export default function PatientOpened({ selectedPatient }) {
  const { togglePatient } = useContext(MainContext)
  return (
    <Popup>
      <HeaderPatient
        title={"Prise en charge - "}
        patientFullName={`${selectedPatient.firstName} ${
          selectedPatient.lastName
        } (${getAge(selectedPatient.birth)} ans)`}
        onClick={togglePatient}
      />
      <BodyPatient selectedPatient={selectedPatient} />
    </Popup>
  )
}
