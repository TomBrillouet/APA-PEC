import styled from "styled-components"

export default function Logo() {
  return (
    <LogoStyled>
      <img src="/images/logo.png" alt="logo" />
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  height: 130px;
  width: 200px;
  align-self: center;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`
