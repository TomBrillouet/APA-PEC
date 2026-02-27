import { useContext, useState } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import { dateFr } from "../../../../../../../utils/math"
import TextArea from "../../../../../../reusable/TextArea"
import Button from "../../../../../../reusable/Button"
import { toastSuccess } from "../../../../../../../datas/toastmessages"

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
      toastSuccess(`Nouveau compte rendu ajouté pour ${patientFullName}.`)
    }
  }
  return (
    <div>
      <TextArea
        label={"Ajouter un compte rendu"}
        onChange={(e) => setLogbookInput(e.target.value)}
        value={logbookInput}
        name={"logbook"}
        rows={5}
        placeholder={"Contenu des séances hors bilan..."}
      />
      <div className="logbook-buttons">
        <div className="actions">
          <Button
            version="submit"
            label={"Enregistrer un nouveau compte rendu"}
            onClick={() => handleLogBookUpdate(selectedPatient)}
            disabled={!isModifEnabled}
          />
        </div>
      </div>
    </div>
  )
}
