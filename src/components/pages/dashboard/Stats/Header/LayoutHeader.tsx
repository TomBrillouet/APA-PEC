import styled from "styled-components"
import { theme } from "../../../../../theme"

type LayoutHeaderType = {
  title: string
  subtitle: string
}

export default function LayoutHeader({ title, subtitle }: LayoutHeaderType) {
  return (
    <StatsHeaderStyled className="page-header">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
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
