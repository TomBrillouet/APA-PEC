import styled from "styled-components"

export default function Popup({ children }) {
  return <PopupStyled>{children}</PopupStyled>
}

const PopupStyled = styled.div`
  position: absolute;
  top: 5%;
  max-height: 90%;
  left: 17%;
  width: 80vw;
  background-color: aliceblue;
  z-index: 2;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(100, 149, 200, 0.18);
  overflow-y: scroll;
`
