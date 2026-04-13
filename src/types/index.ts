import { JSX } from "react"

export type LogInputsType = {
  username: string
  password: string
}

export type AdressType = {
  cp: string
  city: string
  street: string
}
export type LogBookEntryType = {
  content: string
  date: string
}
export type LogBookType = LogBookEntryType[]

export type ResultType = { field: string; chart?: boolean; value: string }

export type ResultsType = ResultType[]

export type ListTestsType = TestType[]

export type TestType = {
  id: string
  name: string
  description: string
  remarques: string
  results: ResultsType
}

export type TestsType = TestType[]

export type BilanType = {
  id: string
  type: "initial" | "intermediaire" | "final"
  height: number
  weight: number
  imc: number
  date: string
  avis?: string
  raisonFin?: string
  objectifsconclusion?: string
  ajustement?: string
  evolution?: string
  ressenti?: string
  tests: TestsType
  reco?: string
}

export type BilansType = BilanType[]

export type PatientType = {
  id: string
  sex: string
  lastName: string
  firstName: string
  address: AdressType
  mail: string
  phone: string
  birth: string
  height: number
  weight: number
  problems: string
  history: string
  goals: string
  archived: boolean
  bilans: BilansType
  logbook: LogBookType
}

export type PatientsType = PatientType[]

export type ProType = {
  lastName: string
  firstName: string
  mail: string
  phone: string
  website: string
  job: string
  society: string
}

export type CardType = {
  label: string
  value?: string | number
  chart?: JSX.Element
  icon: JSX.Element
  accent: string
}

export type SectionType = {
  title: string
  cards: CardType[]
}

export type TestSelectedType = {
  label: string
  value: string
}

export type BilanFormHandle = {
  getData: () => { bilanData: BilanType; inputsValue: PatientType }
}

export type inputType = {
  label: string
  type: string
  name: keyof PatientType | keyof AdressType
  isRequired: boolean
  placeholder?: string
  min?: number | string
  max?: number | string
  minLength?: number
  pattern?: string
}

export type inputsType = inputType[]

export type FlagsType = {
  isArchived: boolean
  isEarlyQuit: PatientType | undefined
  isStagnant: PatientType | undefined
  isInactive: PatientType | undefined
}
