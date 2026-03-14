import styled from "styled-components"
import { theme } from "../../../theme"
import Menu from "./Menu/Menu"
import Toast from "./Toast.jsx"
import Footer from "./Footer/Footer.jsx"

export default function PageTemplate({ children }) {
  return (
    <PageTemplateStyled>
      <Menu />
      <div className="column">
        <div className="background">
          <div className="main">{children}</div>
        </div>
        <Footer />
      </div>
      <Toast />
    </PageTemplateStyled>
  )
}

const PageTemplateStyled = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${theme.colors.background};

  .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .background {
      padding: 30px;
      display: flex;
      flex: 1;
      .main {
        background-color: ${theme.colors.white};
        flex: 1;
        padding: 30px;
        align-items: flex-start;
        border-radius: 8px;
      }
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
