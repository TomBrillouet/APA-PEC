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
            <li key={bilan.id} onClick={() => handleOpenBilan(bilan)}>
              Voir le bilan {bilan.type} - {dateFr(bilan.date)}
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
    li {
      transition: 0.2s ease;
      &:hover {
        cursor: pointer;
        color: ${theme.colors.primary};
      }
    }
  }
`
