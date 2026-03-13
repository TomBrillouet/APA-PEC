import { getAge } from "../../../../../../../../../utils/math"

export default function InfosPatientsSection({ selectedPatient }) {
  return (
    <>
      <b>Informations du patient:</b>
      <ul>
        <li>
          Nom & Prénom : {selectedPatient.lastName} {selectedPatient.firstName}
        </li>
        <li>Âge: {getAge(selectedPatient.birth)}</li>
        <li>Sexe: {selectedPatient.sex}</li>
      </ul>
      <b>Situation:</b>
      <p>Problématique: {selectedPatient.problems}</p>
      <p>Antécédent(s): {selectedPatient.history}</p>
      <b>Vos objectifs et souhaits:</b>
      <ul>
        <li>Objectif(s): {selectedPatient.goals}</li>
      </ul>
    </>
  )
}
