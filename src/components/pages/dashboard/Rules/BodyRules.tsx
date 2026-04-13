import styled from "styled-components"
import { INDICATORS } from "./data/indicators"
import IndicatorCard from "./IndicatorCard"

export default function BodyRules() {
  return (
    <BodyRulesStyled>
      {INDICATORS.map((indicator) => (
        <IndicatorCard
          key={indicator.id}
          {...indicator}
          colors={indicator.colors}
        />
      ))}
    </BodyRulesStyled>
  )
}

const BodyRulesStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding-top: 15px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
