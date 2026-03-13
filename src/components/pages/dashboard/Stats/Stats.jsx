import { useContext } from "react"
import styled from "styled-components"
import { PatientsContext } from "../../../../context/PatientsContext.jsx"
import Loader from "../../../reusable/Loader.jsx"
import Toast from "../Toast.jsx"
import PageTemplate from "../PageTemplate.jsx"
import StatsHeader from "./Header/StatsHeader.jsx"
import StatsSections from "./body/StatsSections.jsx"

export default function Stats() {
  const { patients } = useContext(PatientsContext)
  if (!patients) return <Loader />

  return (
    <PageTemplate>
      <StatsStyled>
        <StatsHeader />
        <StatsSections patients={patients} />
      </StatsStyled>
      <Toast />
    </PageTemplate>
  )
}

const StatsStyled = styled.div`
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  flex: 1;

  @media screen and (max-width: 768px) {
    padding: 14px;
  }
`
