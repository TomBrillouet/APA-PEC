import styled from "styled-components"

export default function PrimaryButton({ onClick, label }) {
  return <PrimaryButtonStyled onClick={onClick}>{label}</PrimaryButtonStyled>
}

const PrimaryButtonStyled = styled.button``
