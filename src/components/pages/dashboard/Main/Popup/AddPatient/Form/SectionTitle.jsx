import styled from "styled-components"
import { theme } from "../../../../../../../theme"

export default function SectionTitle({ label }) {
  return <SectionTitleStyled>{label}</SectionTitleStyled>
}

const SectionTitleStyled = styled.span`
  text-align: center;
  font-size: ${theme.fonts.size.P4};
  color: #2c5282;
`
