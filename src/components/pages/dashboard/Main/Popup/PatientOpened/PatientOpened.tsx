import { useContext } from "react"
import Popup from "../Popup.js"
import { MainContext } from "../../../../../../context/MainContext.js"
import HeaderPopup from "../HeaderPopup.js"
import BodyPatient from "./BodyPatient/BodyPatient.js"
import NewBilan from "./NewBilan/NewBilan.js"
import OldBilan from "./OldBilan/OldBilan.js"
import { PATIENT_LABELS } from "../../../../../../constants/labels/patient.js"
import { getAge } from "../../../../../../utils/math.js"

export default function PatientOpened() {
  const { togglePatient, selectedPatient, isNewBilan, selectedBilan } =
    useContext(MainContext)

  if (!selectedPatient) return null
  const renderBilan = () => {
    if (isNewBilan) return <NewBilan selectedPatient={selectedPatient} />
    if (selectedBilan) return <OldBilan selectedBilan={selectedBilan} />
    return <BodyPatient selectedPatient={selectedPatient} />
  }
  return (
    <Popup>
      <HeaderPopup
        title={PATIENT_LABELS.care}
        patientFullName={`${selectedPatient.firstName} ${
          selectedPatient.lastName
        } (${getAge(selectedPatient.birth)} ans)`}
        onClick={() => togglePatient(null)}
      />
      {renderBilan()}
    </Popup>
  )
}
