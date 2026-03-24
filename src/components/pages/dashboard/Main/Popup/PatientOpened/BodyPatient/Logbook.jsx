import { useContext, useState } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import { dateFr } from "../../../../../../../utils/math"
import TextArea from "../../../../../../reusable/TextArea"
import Button from "../../../../../../reusable/Button"
import { toastSuccess } from "../../../../../../../datas/toastmessages"
import { TOAST_LABELS } from "../../../../../../../constants/labels/toasts"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"

export default function Logbook({ isModifEnabled }) {
  const [logbookInput, setLogbookInput] = useState("")
  const { selectedPatient, updateLogBook, handleSelectedPatient } =
    useContext(MainContext)
  const patientFullName = `${selectedPatient.lastName} ${selectedPatient.firstName}`

  const handleLogBookUpdate = (selectedPatient) => {
    if (logbookInput.trim() !== "") {
      const newEntry = { content: logbookInput, date: dateFr(new Date()) }
      const updatedPatient = {
        ...selectedPatient,
        logbook: [...selectedPatient.logbook, newEntry],
      }
      updateLogBook(selectedPatient, logbookInput)
      handleSelectedPatient(updatedPatient)
      setLogbookInput("")
      toastSuccess(`${TOAST_LABELS.newLogBook} ${patientFullName}.`)
    }
  }
  return (
    <div>
      <TextArea
        label={PATIENT_LABELS.addLogbook}
        onChange={(e) => setLogbookInput(e.target.value)}
        value={logbookInput}
        name={"logbook"}
        rows={5}
        placeholder={PATIENT_LABELS.contentSessions}
      />
      <div className="logbook-buttons">
        <div className="actions">
          <Button
            version="submit"
            label={PATIENT_LABELS.submitNewLogbook}
            onClick={() => handleLogBookUpdate(selectedPatient)}
            disabled={!isModifEnabled}
          />
        </div>
      </div>
    </div>
  )
}
