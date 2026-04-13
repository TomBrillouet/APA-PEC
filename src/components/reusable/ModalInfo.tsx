import styled from "styled-components"
import Button from "./Button"
import React from "react"

type PropsType = {
  text: React.ReactNode
  dialogRef: React.RefObject<HTMLDialogElement | null>
}

export default function ModalInfo({ text, dialogRef }: PropsType) {
  return (
    <ModalInfoStyled ref={dialogRef}>
      <p>{text}</p>
      <Button label={"Fermer"} onClick={() => dialogRef.current?.close()} />
    </ModalInfoStyled>
  )
}

const ModalInfoStyled = styled.dialog`
  border: none;
  border-radius: 12px;
  padding: 2rem;
  min-width: 320px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);
  }

  p {
    margin: 0 0 1.5rem;
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
  }
  button {
    width: 100%;
  }
`
