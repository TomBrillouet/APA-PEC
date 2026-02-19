import FormAddPatient from "./Form/FormAddPatient.jsx"
import Popup from "../Popup.jsx"
import MainContext from "../../../../../context/MainContext.jsx"
import { useContext } from "react"
import HeaderPatient from "../HeaderPatient.jsx"

export default function AddPatient() {
  const { toggleAddPatient } = useContext(MainContext)
  //render
  return (
    <Popup>
      <HeaderPatient
        patientFullName={"Nouveau patient"}
        onClick={toggleAddPatient}
      />
      <FormAddPatient />
    </Popup>
  )
}
