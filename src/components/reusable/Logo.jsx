import styled from "styled-components"
import { theme } from "../../theme"

export default function Logo({ className }) {
  return (
    <LogoStyled>
      <h1 className={className}>
        APA<span>-</span>PEC
      </h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    color: ${theme.colors.primary};
    margin: 0;
    letter-spacing: -2px;
    line-height: 1;

    span {
      opacity: 0.2;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`
