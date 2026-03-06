import styled from "styled-components"

export default function Logo() {
  return (
    <LogoStyled>
      <img src="/images/logo.png" alt="logo" />
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    transform: scale(2.5);
  }
`
