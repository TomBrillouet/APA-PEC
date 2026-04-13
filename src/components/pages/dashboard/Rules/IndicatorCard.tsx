import styled from "styled-components"
import { theme } from "../../../../theme"
import React from "react"

type ColorsType = {
  primary: string
  secondary: string
  tertiary: string
}

type IndicatorType = {
  icon: React.ReactNode
  label: string
  subtitle: string
  description: string
  rule: React.ReactNode
  colors: ColorsType
}

export default function IndicatorCard({
  icon,
  label,
  subtitle,
  description,
  rule,
  colors,
}: IndicatorType) {
  return (
    <IndicatorCardStyled $colors={colors}>
      <div className="header">
        <div className="icon">{icon}</div>
        <div>
          <p className="title">{label}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="body">
        <p>{description}</p>
      </div>

      <div className="rule">
        <b className="rule-title">Règle appliquée</b>
        <p className="rule-desc">{rule}</p>
      </div>
    </IndicatorCardStyled>
  )
}

const IndicatorCardStyled = styled.div<{ $colors: ColorsType }>`
  border: 0.5px solid ${theme.colors.border};
  border-radius: 12px;
  padding: 1.25rem;

  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    .icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      color: ${({ $colors }) => $colors.primary};
      background-color: ${({ $colors }) => $colors.secondary}25;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .title {
      font-size: 14px;
      font-weight: 500;
      margin: 0;
      color: black;
    }
    .subtitle {
      font-size: 12px;
      margin: 0;
      color: ${({ $colors }) => $colors.secondary};
    }
  }
  .body {
    p {
      font-size: 13px;
      color: ${theme.colors.text};
      margin: 0 0 12px;
      line-height: 1.6;
    }
  }
  .rule {
    background: ${({ $colors }) => $colors.secondary}25;
    border-radius: 8px;
    padding: 10px 12px;
    .rule-title {
      font-size: 12px;
      font-weight: 500;
      color: ${({ $colors }) => $colors.tertiary};
      margin: 0 0 4px;
    }
    .rule-desc {
      font-size: 12px;
      color: ${({ $colors }) => $colors.tertiary};
      margin: 0;
      line-height: 1.5;
    }
  }
`
