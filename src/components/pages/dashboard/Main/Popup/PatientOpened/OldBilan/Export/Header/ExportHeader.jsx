export default function ExportHeader({ className, selectedBilan }) {
  return (
    <div className={className}>
      <h1>
        Bilan {selectedBilan.type} en <br /> Activité Physique Adaptée
      </h1>
      <span>
        Faire le point sur votre condition physique et définir vos objectifs.
      </span>
    </div>
  )
}
