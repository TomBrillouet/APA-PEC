import { GoPerson } from "react-icons/go"
import { IoLockClosedOutline } from "react-icons/io5"

export const inputsLogin = [
  {
    name: "username",
    placeholder: "Entrez votre identifiant",
    type: "text",
    autoComplete: "username",
    label: (
      <>
        Identifiant <GoPerson />
      </>
    ),
  },
  {
    name: "password",
    placeholder: "Entrez votre mot de passe",
    type: "password",
    autoComplete: "current-password",
    label: (
      <>
        Mot de passe <IoLockClosedOutline />
      </>
    ),
  },
]
