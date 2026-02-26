import styled from "styled-components"
import { dateFr } from "../../../../../../../utils/math"
import { MainContext } from "../../../../../../../context/MainContext"
import { useContext } from "react"
import { theme } from "../../../../../../../theme"
import Button from "../../../../../../reusable/Button"

export default function BilansPatient({ selectedPatient }) {
  const { toggleOldBilan, handleSelectedBilan, toggleNewBilan } =
    useContext(MainContext)

  const handleOpenBilan = (bilan) => {
    toggleOldBilan()
    handleSelectedBilan(bilan)
  }

  return (
    <BilansPatientStyled>
      <ul>
        {selectedPatient.bilans.map((bilan) => {
          return (
            <li key={bilan.id}>
              Bilan {bilan.type} - {dateFr(bilan.date)}
              <Button
                label={"Ouvrir"}
                onClick={() => handleOpenBilan(bilan)}
                version="minimalist"
              />
            </li>
          )
        })}
      </ul>
      <Button onClick={toggleNewBilan} label={"Faire un bilan"} />
    </BilansPatientStyled>
  )
}

const BilansPatientStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ul {
    display: inline-block;
    list-style-type: disclosure-closed;
    button {
      margin-left: 10px;
    }
  }
`
