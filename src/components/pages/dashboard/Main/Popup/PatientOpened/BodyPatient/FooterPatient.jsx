import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import Button from "../../../../../../reusable/Button"
import styled from "styled-components"

export default function FooterPatient() {
  const { toggleNewBilan } = useContext(MainContext)
  return (
    <FooterPatientStyled>
      <Button onClick={toggleNewBilan} label={"Faire un bilan"} />
    </FooterPatientStyled>
  )
}

const FooterPatientStyled = styled.div`
  margin-top: -51px;
`
