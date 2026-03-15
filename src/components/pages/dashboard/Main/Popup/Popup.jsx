import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function Popup({ children }) {
  return <PopupStyled>{children}</PopupStyled>
}

const PopupStyled = styled.div`
  position: fixed;
  top: 5%;
  max-height: 90%;
  left: 17%;
  width: 80vw;
  background-color: ${theme.colors.white};
  z-index: 2;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(100, 149, 200, 0.18);
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: grey transparent;

  > :nth-child(2) {
    padding: 8px 28px 28px;
    gap: 20px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    left: 0;
    top: 0;
    border-radius: 0;
    width: 100vw;
    max-height: 100%;
    > :nth-child(2) {
      padding: 16px;
    }
  }
`
