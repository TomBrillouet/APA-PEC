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
              <span>
                Bilan <BilanType type={bilan.type}>{bilan.type}</BilanType> -{" "}
                {dateFr(bilan.date)}
              </span>
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

  @media screen and (max-width: 768px) {
    ul {
      list-style: none;
      padding: 0;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        margin-bottom: 5px;
      }
    }
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
