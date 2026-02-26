import styled from "styled-components"
import { theme } from "../../../../../theme"
import { IoMdArrowBack } from "react-icons/io"
import { MainContext } from "../../../../../context/MainContext"
import { useContext } from "react"

export default function HeaderPopup({ patientFullName, onClick, title }) {
  const { isNewBilan, isOldBilanOpened, toggleNewBilan, toggleOldBilan } =
    useContext(MainContext)
  const goBack = () => {
    if (isNewBilan) {
      toggleNewBilan()
    }
    if (isOldBilanOpened) {
      toggleOldBilan()
    }
  }

  return (
    <HeaderPopupStyled>
      {isNewBilan || isOldBilanOpened ? (
        <div className="back-arrow" onClick={goBack}>
          <IoMdArrowBack />
        </div>
      ) : null}
      <h2>
        <em>{title}</em>
        {patientFullName}
      </h2>
      <div className="close" onClick={onClick}>
        X
      </div>
    </HeaderPopupStyled>
  )
}

const HeaderPopupStyled = styled.div`
  border-bottom: 2px solid #cce0f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 28px 18px;
  position: sticky;
  top: 0;
  background-color: ${theme.colors.white};
  z-index: 1;

  .back-arrow,
  .close {
    transition: ease 0.2s;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
      color: ${theme.colors.primary};
      transform: scale(0.9);
    }
    &:active {
      color: unset;
    }
  }

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #1a3a5c;
    letter-spacing: 0.01em;
  }
`
