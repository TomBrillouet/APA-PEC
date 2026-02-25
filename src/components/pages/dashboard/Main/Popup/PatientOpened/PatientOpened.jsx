import { useContext } from "react"
import Popup from "../Popup.jsx"
import { MainContext } from "../../../../../../context/MainContext.jsx"
import HeaderPatient from "../HeaderPopup.jsx"
import BodyPatient from "./BodyPatient/BodyPatient.jsx"
import { getAge } from "../../../../../../utils/math.js"
import NewBilan from "./NewBilan/NewBilan.jsx"
import OldBilan from "./OldBilan/OldBilan.jsx"

export default function PatientOpened() {
  const { togglePatient, selectedPatient, isNewBilan, isOldBilanOpened } =
    useContext(MainContext)

  const renderBilan = () => {
    if (isNewBilan) return <NewBilan />
    if (isOldBilanOpened) return <OldBilan />
    return <BodyPatient />
  }
  return (
    <Popup>
      <HeaderPatient
        title={"Prise en charge - "}
        patientFullName={`${selectedPatient.firstName} ${
          selectedPatient.lastName
        } (${getAge(selectedPatient.birth)} ans)`}
        onClick={togglePatient}
      />
      {renderBilan()}
    </Popup>
  )
}
