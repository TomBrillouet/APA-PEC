import { ProType } from "../../../../../../../types"

type ProInputType = {
  label: string
  type: string
  name: keyof ProType
  isRequired: boolean
  minLength?: number
  pattern?: string
}

export const proInputs: ProInputType[] = [
  {
    label: "Prénom",
    type: "text",
    name: "firstName",
    isRequired: true,
    minLength: 3,
  },
  {
    label: "Nom",
    type: "text",
    name: "lastName",
    isRequired: true,
    minLength: 2,
  },
  {
    label: "Profession",
    type: "text",
    name: "job",
    isRequired: true,
    minLength: 3,
  },
  {
    label: "Mail",
    type: "email",
    name: "mail",
    isRequired: true,
  },
  {
    label: "Téléphone",
    type: "tel",
    name: "phone",
    isRequired: false,
    pattern: "^0[0-9]{9}$",
  },
  {
    label: "Entreprise",
    type: "text",
    name: "society",
    isRequired: false,
    minLength: 2,
  },
  {
    label: "URL Site Web",
    type: "text",
    name: "website",
    isRequired: false,
    minLength: 10,
  },
]
