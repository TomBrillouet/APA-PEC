import PageTemplate from "../PageTemplate.jsx"
import LayoutHeader from "../Stats/Header/LayoutHeader.jsx"
import BodyRules from "./BodyRules.jsx"

export default function Rules() {
  return (
    <PageTemplate>
      <LayoutHeader
        subtitle={"Règles de suivi"}
        title={"Comprendre les indicateurs affichés sur vos patients"}
      />
      <BodyRules />
    </PageTemplate>
  )
}
