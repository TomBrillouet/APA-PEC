import styled from "styled-components"
import Aside from "./Aside"

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Aside />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    background: url("/images/login-bg.webp"),
      linear-gradient(135deg, rgba(30, 29, 39, 0.7), rgba(30, 29, 39, 0.5));
    background-size: contain;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
`
