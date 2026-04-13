import InfosPatientsSection from "./InfosPatientsSection"
import TestsSection from "./TestsSection"
import { dateFr } from "../../../../../../../../../utils/math"
import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient.js"
import { BilanType, PatientType } from "../../../../../../../../../types"

type BilanSectionType = {
  selectedBilan: BilanType
  selectedPatient: PatientType
}

export default function BilanSection({
  selectedBilan,
  selectedPatient,
}: BilanSectionType) {
  return (
    <section>
      <h2>
        {PATIENT_LABELS.reportBilan} {selectedBilan.type}{" "}
        {PATIENT_LABELS.realised} {dateFr(selectedBilan.date)}
      </h2>
      <InfosPatientsSection
        selectedPatient={selectedPatient}
        selectedBilan={selectedBilan}
      />
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
          <br />
          <b>{PATIENT_LABELS.analyze}</b>
          <p style={{ whiteSpace: "pre-line" }}>{selectedBilan.reco}</p>
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
