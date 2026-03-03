import styled from "styled-components"
import { theme } from "../../../theme"
import Logo from "../../reusable/Logo"
import LoginForm from "./LoginForm"

export default function Aside() {
  return (
    <AsideStyled>
      <Logo />
      <p className="tagline">Gestion et suivi personnalisé des patients</p>
      <LoginForm />
    </AsideStyled>
  )
}

const AsideStyled = styled.aside`
  position: relative;
  z-index: 1;
  height: 100vh;
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
  }
`
