import styled from "styled-components"
import Button from "../../../../../reusable/Button.jsx"

export default function FormBottom({ onClose }) {
  return (
    <FormBottomStyled className="actions">
      <Button
        label={"Annuler"}
        onClick={onClose}
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
