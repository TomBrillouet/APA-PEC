import InfosPatientsSection from "./InfosPatientsSection"
import TestsSection from "./TestsSection"
import FooterSection from "./FooterSection.jsx"
import { dateFr } from "../../../../../../../../../utils/math.js"

export default function BilanSection({ selectedBilan, selectedPatient, pro }) {
  return (
    <section>
      <h2>
        Compte rendu du bilan {selectedBilan.type} réalisé le{" "}
        {dateFr(selectedBilan.date)}
      </h2>
      <InfosPatientsSection selectedPatient={selectedPatient} />
      <TestsSection className={"tests"} selectedBilan={selectedBilan} />
      <b>Analyse professionnelle et recommandations:</b>
      {selectedBilan.reco && <p>{selectedBilan.reco}</p>}
      <br />
      <FooterSection pro={pro} />
    </section>
  )
}
