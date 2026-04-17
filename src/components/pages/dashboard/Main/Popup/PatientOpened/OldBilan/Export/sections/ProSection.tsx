import { ProType } from "../../../../../../../../../types"
import { formatPhone } from "../../../../../../../../../utils/phone"

type ProSectionType = {
  className: string
  pro: ProType | null
}

export default function ProSection({ className, pro }: ProSectionType) {
  if (!pro) return null
  return (
    <section className={className}>
      <h2>{pro.society}</h2>
      <span>{pro.job}</span>
      <span>{formatPhone(pro.phone)}</span>
      <span>{pro.mail}</span>
      <span>{pro.website}</span>
    </section>
  )
}
