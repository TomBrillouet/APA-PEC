import { useContext } from "react"
import styled from "styled-components"
import { PatientsContext } from "../../../../context/PatientsContext.js"
import Loader from "../../../reusable/Loader.js"
import Toast from "../Toast.js"
import PageTemplate from "../PageTemplate.js"
import StatsSections from "./body/StatsSections.js"
import LayoutHeader from "./Header/LayoutHeader.js"
import { STATS_LABEL } from "../../../../constants/labels/stats.js"
import NoPatient from "../../../reusable/NoPatient.js"

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
        {patients.length > 0 ? (
          <StatsSections patients={patients} />
        ) : (
          <NoPatient />
        )}
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
