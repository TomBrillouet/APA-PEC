import { useContext, useState } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import { dateFr } from "../../../../../../../utils/math"
import TextArea from "../../../../../../reusable/TextArea"
import Button from "../../../../../../reusable/Button"
import styled from "styled-components"

export default function Logbook({ isModifEnabled, togglePatient }) {
  const [logbookInput, setLogbookInput] = useState("")
  const { selectedPatient, updateLogBook, setSelectedPatient } =
    useContext(MainContext)

  const handleLogBookUpdate = (selectedPatient) => {
    if (logbookInput.trim() !== "") {
      const newEntry = { content: logbookInput, date: dateFr(new Date()) }
      const updatedPatient = {
        ...selectedPatient,
        logbook: [...selectedPatient.logbook, "hr", newEntry],
      }
      updateLogBook(selectedPatient, logbookInput)
      setSelectedPatient(updatedPatient)
      setLogbookInput("")
    }
  }
  return (
    <LogbookStyled>
      <TextArea
        label={"Ajouter au journal de bord"}
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
            label={"Enregistrer le journal de bord"}
            onClick={() => handleLogBookUpdate(selectedPatient)}
            disabled={!isModifEnabled}
          />
        </div>
      </div>
    </LogbookStyled>
  )
}

const LogbookStyled = styled.div`
  .logbook-buttons {
    padding-top: 20px;
  }
`
