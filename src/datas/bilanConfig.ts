import { BilanType, PatientType } from "../types"

type BilanFieldsType = {
  initial: BilanSectionType<PatientType>
  intermediaire: BilanSectionType<BilanType>
  final: BilanSectionType<BilanType>
}

type BilanSectionType<T> = {
  textareas: {
    name: keyof T
    label: string
  }[]
}

export const BILAN_FIELDS: BilanFieldsType = {
  initial: {
    textareas: [
      {
        label:
          "Problèmes (pathologies, douleurs, limitations fonctionnelles, quotidien ...)",
        name: "problems",
      },
      {
        label: "Antécédents (maladies, blessures, traitements ...)",
        name: "history",
      },
      {
        label: "Objectifs (en APA, dans le quotidien)",
        name: "goals",
      },
    ],
  },
  intermediaire: {
    textareas: [
      {
        name: "evolution",
        label: "Évolution de la problématique / Atteinte de l'objectif",
      },
      { name: "ressenti", label: "Ressenti du patient" },
      {
        name: "ajustement",
        label: "Bilan et ajustement de la prise en charge",
      },
    ],
  },
  final: {
    textareas: [
      {
        name: "objectifsconclusion",
        label: "Les objectifs de la prise en charge ont-ils été atteints ?",
      },
      {
        name: "raisonFin",
        label:
          "Raison de fin d'accompagnement/quelle direction pour le patient",
      },
      { name: "avis", label: "Bilan de la prise en charge et avis du patient" },
    ],
  },
}
