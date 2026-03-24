import { useContext } from "react"
import styled from "styled-components"
import { PatientsContext } from "../../../../context/PatientsContext.jsx"
import Loader from "../../../reusable/Loader.jsx"
import Toast from "../Toast.jsx"
import PageTemplate from "../PageTemplate.jsx"
import StatsSections from "./body/StatsSections.jsx"
import LayoutHeader from "./Header/LayoutHeader.jsx"
import { STATS_LABEL } from "../../../../constants/labels/stats.jsx"

export default function Stats() {
  const { patients } = useContext(PatientsContext)
  if (!patients)
    return (
      <PageTemplate>
        <Loader />
      </PageTemplate>
    )

  return (
    <PageTemplate>
      <StatsStyled>
        <LayoutHeader
          title={STATS_LABEL.title}
          subtitle={STATS_LABEL.subtitle}
        />
        <StatsSections patients={patients} />
      </StatsStyled>
      <Toast />
    </PageTemplate>
  )
}

const StatsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  flex: 1;
`
