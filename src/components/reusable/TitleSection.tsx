import styled from "styled-components"

export default function TitleSection({ label }: { label: string }) {
  return <TitleSectionStyled>{label}</TitleSectionStyled>
}

const TitleSectionStyled = styled.h3`
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a90c4;
`
