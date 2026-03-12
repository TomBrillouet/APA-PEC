import styled from "styled-components"

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
    font-size: 28px;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 4px 0;
  }
  .subtitle {
    color: #64748b;
    font-size: 14px;
    margin: 0;
  }
`
