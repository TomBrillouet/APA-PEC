import InfosPatientsSection from "./InfosPatientsSection"
import TestsSection from "./TestsSection"
import { dateFr } from "../../../../../../../../../utils/math.js"

export default function BilanSection({ selectedBilan, selectedPatient, pro }) {
  return (
    <section>
      <h2>
        Compte rendu du bilan {selectedBilan.type} réalisé le{" "}
        {dateFr(selectedBilan.date)}
      </h2>
      <InfosPatientsSection selectedPatient={selectedPatient} />
      {selectedBilan.type === "intermediaire" && (
        <div>
          <b>Évolution de la problématique / Atteinte de l'objectif:</b>
          <p>{selectedBilan.evolution}</p>
          <b>Ressenti du patient:</b>
          <p>{selectedBilan.ressenti}</p>
        </div>
      )}
      <TestsSection className={"tests"} selectedBilan={selectedBilan} />

      {selectedBilan.reco && selectedBilan.type === "initial" && (
        <div>
          <b>Analyse professionnelle et recommandations:</b>
          <p>{selectedBilan.reco}</p>
        </div>
      )}
      {selectedBilan.type === "intermediaire" && (
        <div>
          <b>Bilan et ajustement de la prise en charge</b>
          <p>{selectedBilan.ajustement}</p>
        </div>
      )}
      {selectedBilan.type === "final" && (
        <div>
          <b>Les objectifs de la prise en charge ont-ils été atteints ?</b>
          <p>{selectedBilan.objectifsconclusion}</p>
          <b>Raison de fin d'accompagnement/quelle direction pour le patient</b>
          <p>{selectedBilan.raisonFin}</p>
          <b>Bilan de la prise en charge et avis du patient</b>
          <p>{selectedBilan.avis}</p>
        </div>
      )}

      <br />
    </section>
  )
}
