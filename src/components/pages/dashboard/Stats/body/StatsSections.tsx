import styled from "styled-components"
import { SECTIONS } from "../data/statsSection"
import StatsCard from "./StatsCard"
import { PatientsType } from "../../../../../types"

export default function StatsSections({
  patients,
}: {
  patients: PatientsType
}) {
  const sections = SECTIONS(patients)

  return sections.map((section) => (
    <StatsSectionsStyled className="section" key={section.title}>
      <h3 className="section-title">{section.title}</h3>
      <div className="cards-grid">
        <StatsCard section={section} />
      </div>
    </StatsSectionsStyled>
  ))
}

const StatsSectionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .section-title {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #94a3b8;
    margin: 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e8f0;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }

  @media screen and (max-width: 768px) {
    .cards-grid {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
  }
`
