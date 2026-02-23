export const BILAN_FIELDS = {
  initial: {},
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
