import styled from "styled-components"
import { dateFr } from "../../../../../../../utils/math"
import { MainContext } from "../../../../../../../context/MainContext"
import { useContext } from "react"
import Button from "../../../../../../reusable/Button"
import ListWithButton from "../../../../../../reusable/ListWithButton"
import { IoDocumentTextOutline } from "react-icons/io5"

export default function BilansPatient({ selectedPatient }) {
  const { toggleOldBilan, handleSelectedBilan, toggleNewBilan } =
    useContext(MainContext)

  const handleOpenBilan = (bilan) => {
    toggleOldBilan()
    handleSelectedBilan(bilan)
  }

  return (
    <BilansPatientStyled>
      <ListWithButton
        buttonLabel={"Ouvrir"}
        datas={selectedPatient.bilans}
        onClick={handleOpenBilan}
        className={"li-bilans"}
        icon={<IoDocumentTextOutline />}
        renderItem={(bilan) => (
          <>
            Bilan <BilanType type={bilan.type}>{bilan.type}</BilanType> -{" "}
            {dateFr(bilan.date)}
          </>
        )}
      />
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

  .li-bilans {
    svg {
      font-size: 22px;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: -6em;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
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
