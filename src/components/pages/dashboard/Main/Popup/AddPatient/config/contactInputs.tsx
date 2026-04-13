import { inputsType } from "../../../../../../../types"

export const contactInputs: inputsType = [
  {
    label: "Mail",
    type: "email",
    name: "mail",
    isRequired: false,
  },
  {
    label: "Téléphone",
    type: "tel",
    name: "phone",
    isRequired: true,
    pattern: "^0[0-9]{9}$",
  },
  {
    label: "Numéro et rue",
    type: "text",
    name: "street",
    isRequired: false,
    minLength: 5,
  },
  {
    label: "Ville",
    type: "text",
    name: "city",
    isRequired: false,
    minLength: 2,
  },
  {
    label: "Code postal",
    type: "text",
    name: "cp",
    isRequired: false,
    pattern: "^[0-9]{5}$",
  },
]
