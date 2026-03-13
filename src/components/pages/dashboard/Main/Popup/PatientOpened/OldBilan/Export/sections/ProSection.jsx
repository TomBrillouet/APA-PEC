export default function ProSection({ className, pro }) {
  return (
    <section className={className}>
      <h2>{pro.society}</h2>
      <span>{pro.job}</span>
      <span>{pro.phone}</span>
      <span>{pro.mail}</span>
      <span>{pro.website}</span>
    </section>
  )
}
