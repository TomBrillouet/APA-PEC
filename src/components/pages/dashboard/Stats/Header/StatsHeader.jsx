import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function StatsHeader() {
  return (
    <StatsHeaderStyled className="page-header">
      <h2>Statistiques</h2>
      <p className="subtitle">Vue d'ensemble de votre activité</p>
    </StatsHeaderStyled>
  )
}

const StatsHeaderStyled = styled.div`
  h2 {
    font-size: ${theme.fonts.size.P4};
    color: #2c5282;
    font-weight: 400;
    margin: 0 0 4px 0;
  }
  .subtitle {
    color: #64748b;
    font-size: 14px;
    margin: 0;
  }
`
