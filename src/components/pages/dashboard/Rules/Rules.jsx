import { RULES_LABELS } from "../../../../constants/labels/rules.jsx"
import PageTemplate from "../PageTemplate.jsx"
import LayoutHeader from "../Stats/Header/LayoutHeader.jsx"
import BodyRules from "./BodyRules.jsx"

export default function Rules() {
  return (
    <PageTemplate>
      <LayoutHeader
        title={RULES_LABELS.title}
        subtitle={RULES_LABELS.subtitle}
      />
      <BodyRules />
    </PageTemplate>
  )
}
