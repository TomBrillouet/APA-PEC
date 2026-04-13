import { RULES_LABELS } from "../../../../constants/labels/rules.js"
import PageTemplate from "../PageTemplate.js"
import LayoutHeader from "../Stats/Header/LayoutHeader.js"
import BodyRules from "./BodyRules.js"

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
