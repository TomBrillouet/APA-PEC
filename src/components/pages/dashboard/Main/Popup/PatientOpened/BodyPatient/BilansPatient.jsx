import styled from "styled-components"
import { dateFr } from "../../../../../../../utils/math"

export default function BilansPatient({ selectedPatient }) {
  const handleOpenBilan = (bilanId) => {
    alert(bilanId)
  }

  return (
    <BilansPatientStyled>
      <ul>
        {selectedPatient.bilans.map((bilan) => {
          return (
            <li key={bilan.id} onClick={() => handleOpenBilan(bilan.id)}>
              Bilan {bilan.type} - {dateFr(bilan.date)}
            </li>
          )
        })}
      </ul>
    </BilansPatientStyled>
  )
}

const BilansPatientStyled = styled.div`
  li {
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`
