import styled from "styled-components"
import { MainContext } from "../../../../../../../context/MainContext"
import { dateFr } from "../../../../../../../utils/math"
import { useContext } from "react"
import Button from "../../../../../../reusable/Button"
import ListWithButton from "../../../../../../reusable/ListWithButton"
import { IoDocumentTextOutline } from "react-icons/io5"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"
import { BilanType, PatientType } from "../../../../../../../types"

type BilansPatientType = {
  selectedPatient: PatientType
  toggleArchived: () => void
}

export default function BilansPatient({
  selectedPatient,
  toggleArchived,
}: BilansPatientType) {
  const { toggleOldBilan, handleSelectedBilan, toggleNewBilan } =
    useContext(MainContext)

  const handleOpenBilan = (bilan: BilanType) => {
    toggleOldBilan()
    handleSelectedBilan(bilan)
  }

  return (
    <BilansPatientStyled>
      <ListWithButton>
        {selectedPatient.bilans.map((bilan: BilanType) => {
          return (
            <li
              key={bilan.id}
              className={"li-bilans"}
              onClick={() => handleOpenBilan(bilan)}
            >
              <IoDocumentTextOutline />
              <span>
                {PATIENT_LABELS.bilan}{" "}
                <TypeBilan type={bilan.type}>{bilan.type}</TypeBilan> -{" "}
                {dateFr(bilan.date)}
              </span>
              <Button
                label={PATIENT_LABELS.open}
                onClick={() => handleOpenBilan(bilan)}
                version="minimalist"
              />
            </li>
          )
        })}
      </ListWithButton>
      <div className="actions">
        <Button
          onClick={toggleNewBilan}
          label={PATIENT_LABELS.makeBilan}
          version="submit"
        />
        <Button
          label={
            selectedPatient.archived
              ? PATIENT_LABELS.resumeCare
              : PATIENT_LABELS.finishCare
          }
          onClick={toggleArchived}
          version="red"
        />
      </div>
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

  .actions {
    display: flex;
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-top: -6em;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`

const TypeBilan = styled.span<{ type: BilanType["type"] }>`
  color: ${({ type }) => colors[type] || "inherit"};
`

const colors = {
  initial: "green",
  intermediaire: "orange",
  final: "red",
}
