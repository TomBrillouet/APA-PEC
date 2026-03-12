import styled from "styled-components"
import { theme } from "../../../theme"
import Menu from "./Menu/Menu"
import Toast from "./Toast.jsx"

export default function PageTemplate({ children }) {
  return (
    <PageTemplateStyled>
      <Menu />
      <div className="background">
        <div className="main">{children}</div>
      </div>
      <Toast />
    </PageTemplateStyled>
  )
}

const PageTemplateStyled = styled.div`
  display: flex;
  min-height: 100vh;
  .background {
    background-color: ${theme.colors.background};
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 30px;
    .main {
      background-color: ${theme.colors.white};
      display: flex;
      flex: 1;
      padding: 30px;
      align-items: flex-start;
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 768px) {
    .background {
      padding: 10px;
      .main {
        text-align: center;
        align-items: center;
        padding: 10px;
      }
    }
  }
`
