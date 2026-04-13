import styled from "styled-components"
import { theme } from "../../../theme"
import Logo from "../../reusable/Logo"
import LoginForm from "./LoginForm"
import { LOGINPAGE_LABELS } from "../../../constants/labels/loginPage.js"

export default function Aside() {
  return (
    <AsideStyled>
      <Logo />
      <p className="tagline">{LOGINPAGE_LABELS.tagline}</p>
      <LoginForm />
    </AsideStyled>
  )
}

const AsideStyled = styled.aside`
  position: relative;
  z-index: 1;
  min-height: 100dvh;
  width: 25%;
  background: linear-gradient(165deg, #ffffff 0%, #f8f9fa 100%);
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset 0px -6px 20px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }

  .tagline {
    color: ${theme.colors.text};
    font-size: 0.95rem;
    margin-top: 0.5rem;
    font-weight: 500;
    text-align: center;
  }
`
