import { createContext } from "react"

export const PatientsContext = createContext({
  patients: [],
  setPatients: () => {},
})
