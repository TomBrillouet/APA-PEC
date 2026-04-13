import styled from "styled-components"
import Button from "../../../../../../reusable/Button.js"
import { MainContext } from "../../../../../../../context/MainContext.js"
import { useContext } from "react"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient.js"

export default function FormBottom() {
  const { toggleAddPatient } = useContext(MainContext)
  return (
    <FormBottomStyled className="actions">
      <Button
        label={PATIENT_LABELS.cancel}
        onClick={toggleAddPatient}
        version={"cancel"}
        type={"button"}
      />
      <Button
        label={PATIENT_LABELS.submit}
        version={"submit"}
        type={"submit"}
      />
    </FormBottomStyled>
  )
}

const FormBottomStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 16px;
`
