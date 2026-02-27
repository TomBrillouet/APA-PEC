import styled from "styled-components"
import { dateFr } from "../../../../../../../utils/math"
import { MainContext } from "../../../../../../../context/MainContext"
import { useContext } from "react"
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
              Bilan <BilanType type={bilan.type}>{bilan.type}</BilanType> -{" "}
              {dateFr(bilan.date)}
              <Button
                label={"Ouvrir"}
                onClick={() => handleOpenBilan(bilan)}
                version="minimalist"
              />
            </li>
          )
        })}
      </ul>
      <Button
        onClick={toggleNewBilan}
        label={"Faire un bilan"}
        version="submit"
      />
    </BilansPatientStyled>
  )
}

const BilansPatientStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;

  ul {
    display: inline-block;
    list-style-type: disclosure-closed;
    li {
      button {
        margin-left: 10px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: -6em;
  }
`

const BilanType = styled.span`
  color: ${({ type }) => colors[type] || "inherit"};
`

const colors = {
  initial: "green",
  intermediaire: "orange",
  final: "red",
}
