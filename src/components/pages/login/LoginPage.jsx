import styled from "styled-components"
import Aside from "./Aside"
import { useEffect, useRef } from "react"
import ModalInfo from "../../reusable/ModalInfo"

export default function LoginPage() {
  const modal = useRef()

  useEffect(() => {
    modal.current.showModal()
  }, [])

  return (
    <LoginPageStyled>
      <ModalInfo
        ref={modal}
        text={
          "L'identifiant et le mot de passe sont préremplis pour accéder à la démo. N'entrez pas de données personnelles : vous n'êtes pas les seuls à y avoir accès."
        }
      />
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
    background:
      url("/images/login-bg.webp"),
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
