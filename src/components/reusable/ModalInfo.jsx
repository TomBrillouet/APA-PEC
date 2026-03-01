import styled from "styled-components"
import Button from "./Button"

export default function ModalInfo({ text, ref }) {
  return (
    <ModalInfoStyled ref={ref}>
      <p>{text}</p>
      <Button label={"Fermer"} onClick={() => ref.current.close()} />
    </ModalInfoStyled>
  )
}

const ModalInfoStyled = styled.dialog`
  border: none;
  border-radius: 12px;
  padding: 2rem;
  min-width: 320px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  /* Le fond sombre derrière */
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
