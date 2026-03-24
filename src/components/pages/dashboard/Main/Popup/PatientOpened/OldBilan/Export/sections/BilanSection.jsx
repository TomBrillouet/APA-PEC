import InfosPatientsSection from "./InfosPatientsSection"
import TestsSection from "./TestsSection"
import { dateFr } from "../../../../../../../../../utils/math.js"
import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient.jsx"

export default function BilanSection({ selectedBilan, selectedPatient }) {
  return (
    <section>
      <h2>
        {PATIENT_LABELS.reportBilan} {selectedBilan.type}{" "}
        {PATIENT_LABELS.realised} {dateFr(selectedBilan.date)}
      </h2>
      <InfosPatientsSection selectedPatient={selectedPatient} />
      {selectedBilan.type === "intermediaire" && (
        <div>
          <b>{PATIENT_LABELS.evolution}</b>
          <p>{selectedBilan.evolution}</p>
          <b>{PATIENT_LABELS.felt}</b>
          <p>{selectedBilan.ressenti}</p>
        </div>
      )}
      <TestsSection className={"tests"} selectedBilan={selectedBilan} />

      {selectedBilan.reco && selectedBilan.type === "initial" && (
        <div>
          <b>{PATIENT_LABELS.analyze}</b>
          <p>{selectedBilan.reco}</p>
        </div>
      )}
      {selectedBilan.type === "intermediaire" && (
        <div>
          <b>{PATIENT_LABELS.adjust}</b>
          <p>{selectedBilan.ajustement}</p>
        </div>
      )}
      {selectedBilan.type === "final" && (
        <div>
          <b>{PATIENT_LABELS.reached}</b>
          <p>{selectedBilan.objectifsconclusion}</p>
          <b>{PATIENT_LABELS.reason}</b>
          <p>{selectedBilan.raisonFin}</p>
          <b>{PATIENT_LABELS.opinion}</b>
          <p>{selectedBilan.avis}</p>
        </div>
      )}

      <br />
    </section>
  )
}
