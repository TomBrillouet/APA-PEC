import styled from "styled-components"
import { SectionType } from "../../../../../types"

export default function StatsCard({ section }: { section: SectionType }) {
  return section.cards.map((card) => (
    <StatCard key={card.label} $accent={card.accent}>
      <div className="card-icon" style={{ color: card.accent }}>
        {card.icon}
      </div>
      <div className="card-content">
        {card.value && <span className="card-value">{card.value}</span>}
        {card.chart && <span className="card-chart">{card.chart}</span>}
        <span className="card-label">{card.label}</span>
      </div>
    </StatCard>
  ))
}

const StatCard = styled.div<{ $accent: string }>`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #e2e8f0;
  border-left: 4px solid ${({ $accent }) => $accent};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .card-icon {
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .card-value {
    font-size: 32px;
    font-weight: 700;
    color: #1e293b;
    line-height: 1;
  }

  .card-label {
    font-size: 15px;
    color: #64748b;
    line-height: 1.4;
  }
`
