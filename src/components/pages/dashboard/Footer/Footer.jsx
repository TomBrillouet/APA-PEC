import styled from "styled-components"
import { theme } from "../../../../theme"

export default function Footer() {
  return (
    <FooterStyled>
      <hr />
      <span>APA-PEC · {__APP_VERSION__} · Développé par Tom Brillouet</span>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 15px;
  hr {
    background-color: ${theme.colors.primary};
    border: none;
    height: 1px;
    width: 80%;
  }
  span {
    text-align: center;
    display: inline;
    font-size: 12px;
    opacity: 0.6;
  }
`
