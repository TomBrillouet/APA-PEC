import styled from "styled-components"
import Button from "../../../../../reusable/Button.jsx"
import MainContext from "../../../../../../context/MainContext.jsx"
import { useContext } from "react"

export default function FormBottom() {
  const { toggleAddPatient } = useContext(MainContext)
  return (
    <FormBottomStyled className="actions">
      <Button
        label={"Annuler"}
        onClick={toggleAddPatient}
        version={"cancel"}
        type={"button"}
      />
      <Button label={"Enregistrer"} version={"submit"} type={"submit"} />
    </FormBottomStyled>
  )
}

const FormBottomStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 16px;
`
