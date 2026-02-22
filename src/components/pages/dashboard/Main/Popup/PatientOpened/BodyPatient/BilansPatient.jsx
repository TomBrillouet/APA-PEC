import styled from "styled-components"
import { dateFr } from "../../../../../../../utils/math"

export default function BilansPatient({ selectedPatient }) {
  const handleOpenBilan = (bilan) => {
    const bilanOpened = { ...selectedPatient, bilans: bilan }
    alert(JSON.stringify(bilanOpened))
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
    </BilansPatientStyled>
  )
}

const BilansPatientStyled = styled.div`
  ul {
    display: inline-block;
    li {
      &:hover {
        cursor: pointer;
        font-weight: bold;
      }
    }
  }
`
