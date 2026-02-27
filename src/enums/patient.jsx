export const EMPTY_PATIENT = {
  id: "",
  sex: "",
  lastName: "",
  firstName: "",
  address: { cp: "", city: "", street: "" },
  mail: "",
  phone: "",
  birth: "",
  height: 0,
  weight: 0,
  problems: "",
  history: "",
  goals: "",
  bilans: [],
  logbook: [],
  archived: false,
}

export const NEW_BILAN_LABELS = {
  weight: "Dernier poids connu:",
  height: "Dernière taille connue:",
  imc: "Dernier IMC connu:",
}

export const BILAN_LABELS = {
  weight: "Poids enregistré:",
  height: "Taille enregistrée:",
  imc: "IMC calculé:",
}
