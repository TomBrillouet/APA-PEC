import { inputsType } from "../../../../../../../types"

export const identityInputs: inputsType = [
  {
    label: "Nom",
    type: "text",
    name: "lastName",
    isRequired: true,
    minLength: 2,
  },
  {
    label: "Prénom",
    type: "text",
    name: "firstName",
    isRequired: true,
    minLength: 3,
  },
  {
    label: "Date de naissance",
    type: "date",
    name: "birth",
    isRequired: true,
    min: "1920-01-01",
    max: new Date().toISOString().slice(0, 10),
  },
  {
    label: "Taille",
    type: "number",
    name: "height",
    isRequired: false,
    placeholder: "cm",
    min: 50,
    max: 300,
  },
  {
    label: "Poids",
    type: "number",
    name: "weight",
    isRequired: false,
    placeholder: "kg",
    min: 20,
    max: 300,
  },
]
