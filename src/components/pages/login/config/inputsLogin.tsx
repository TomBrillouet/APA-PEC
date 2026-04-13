import { GoPerson } from "react-icons/go"
import { IoLockClosedOutline } from "react-icons/io5"
import { LogInputsType } from "../../../../types"
import React from "react"

type InputLoginType = {
  name: keyof LogInputsType
  placeholder: string
  type: string
  autoComplete: string
  label: React.ReactNode
}

export const inputsLogin: InputLoginType[] = [
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
