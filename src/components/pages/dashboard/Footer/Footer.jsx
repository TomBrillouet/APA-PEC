import styled from "styled-components"
import { theme } from "../../../../theme"

export default function Footer() {
  const restartDemo = () => {
    localStorage.setItem("tour_completed", "")
  }

  return (
    <FooterStyled>
      <hr />
      <div>
        <span>APA-PEC · {__APP_VERSION__} · Développé par Tom Brillouet</span>
        <a
          href="/dashboard"
          onClick={() => {
            restartDemo()
          }}
        >
          <span>Revoir la démo</span>
        </a>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 9px;
  background-color: transparent;

  hr {
    background-color: ${theme.colors.primary};
    border: none;
    height: 1px;
    width: 80%;
  }
  div {
    font-size: 12px;
    opacity: 0.6;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    span {
      grid-area: 1 / 2 / 1 / 3;
    }
    a {
      grid-area: 1 / 3 / 1 / 4;
      text-align: center;
      text-decoration: none;
      color: inherit;
      span {
        padding: 3px 20px;
        border: solid #252525 1px;
        border-radius: 8px;
        transition: all 0.2s ease;
        &:hover {
          background-color: #252525;
          color: white;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    div {
      row-gap: 4px;
      grid-template-rows: repeat(2, 1fr);

      a {
        grid-area: 2 / 2 / 2 / 3;
        span {
          padding: 0 20px;
        }
      }
    }
  }
`
