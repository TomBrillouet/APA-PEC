import styled from "styled-components"
import { theme } from "../../../../../../theme"
import MainContext from "../../../../../../context/MainContext"
import { useContext } from "react"

export default function HeaderAddPatient() {
  const { toggleAddPatient } = useContext(MainContext)
  return (
    <HeaderAddPatientStyled className="header-add">
      <h2>Nouveau patient</h2>
      <span className="close" onClick={toggleAddPatient}>
        X
      </span>
    </HeaderAddPatientStyled>
  )
}

const HeaderAddPatientStyled = styled.div`
  border-bottom: 2px solid #cce0f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 28px 18px;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #1a3a5c;
    letter-spacing: 0.01em;
  }
  span {
    font-weight: bold;
    transition: transform ease 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(0.9);
      color: ${theme.colors.primary};
    }
  }
`
