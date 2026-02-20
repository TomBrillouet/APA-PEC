export const identityInputs = [
  {
    label: "Nom",
    type: "text",
    name: "lastName",
    isRequired: true,
  },
  {
    label: "Prénom",
    type: "text",
    name: "firstName",
    isRequired: true,
  },
  {
    label: "Date de naissance",
    type: "date",
    name: "birth",
    isRequired: true,
  },
  {
    label: "Taille",
    type: "number",
    name: "height",
    isRequired: false,
    placeholder: "cm",
  },
  {
    label: "Poids",
    type: "number",
    name: "weight",
    isRequired: false,
    placeholder: "kg",
  },
]
