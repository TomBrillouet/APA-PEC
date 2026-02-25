import styled from "styled-components"
import { getImc } from "../../../../../../../../../utils/math"

export default function PreviousShapeValues({ selectedPatient }) {
  const initWeight = selectedPatient.weight
  const initHeight = selectedPatient.height
  return (
    <PreviousShapeValuesStyled className="old-values">
      <div>Dernier poids connu : {initWeight}</div>
      <div>Dernière taille connue : {initHeight}</div>
      <div>Dernier IMC connu : {getImc(initWeight, initHeight)}</div>
    </PreviousShapeValuesStyled>
  )
}

const PreviousShapeValuesStyled = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`
