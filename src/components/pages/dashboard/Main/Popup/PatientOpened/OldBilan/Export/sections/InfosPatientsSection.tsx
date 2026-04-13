import { BilanType, PatientType } from "../../../../../../../../../types"
import { getAge, getImc } from "../../../../../../../../../utils/math"

export default function InfosPatientsSection({
  selectedPatient,
  selectedBilan,
}: {
  selectedPatient: PatientType
  selectedBilan: BilanType
}) {
  return (
    <>
      <b>Informations du patient:</b>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "100px",
        }}
      >
        <ul>
          <li>
            Nom & Prénom : {selectedPatient.lastName}{" "}
            {selectedPatient.firstName}
          </li>
          <li>Âge: {getAge(selectedPatient.birth)}</li>
          <li>Sexe: {selectedPatient.sex === "man" ? "Homme" : "Femme"}</li>
        </ul>
        <ul>
          <li>
            Taille:{" "}
            {(selectedBilan.type === "initial"
              ? selectedPatient.height + " cm"
              : selectedBilan.height || "Pas de mesure ") +
              (selectedBilan.height && selectedBilan.type !== "initial"
                ? " cm"
                : "")}
          </li>
          <li>
            Poids:{" "}
            {(selectedBilan.type === "initial"
              ? selectedPatient.weight + " kg"
              : selectedBilan.weight || "Pas de mesure ") +
              (selectedBilan.weight && selectedBilan.type !== "initial"
                ? " kg"
                : "")}
          </li>
          <li>
            IMC:{" "}
            {selectedBilan.type === "initial"
              ? getImc(selectedPatient.weight, selectedPatient.height).toFixed(
                  2,
                )
              : selectedBilan.imc || "Pas de mesure"}
          </li>
        </ul>
      </div>
      <b>Situation:</b>
      <p style={{ whiteSpace: "pre-line" }}>
        <span style={{ textDecoration: "underline" }}>Problématique</span>:{" "}
        {selectedPatient.problems}
      </p>
      <p style={{ whiteSpace: "pre-line" }}>
        <span style={{ textDecoration: "underline" }}>Antécédent(s)</span>:{" "}
        {selectedPatient.history}
      </p>
      <b>Objectifs et souhaits:</b>
      <p style={{ whiteSpace: "pre-line" }}>{selectedPatient.goals}</p>
    </>
  )
}
