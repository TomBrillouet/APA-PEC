import { createContext } from "react"

export const MainContext = createContext({
  addNewPatient: () => {},
  updatePatients: () => {},
  toggleAddPatient: () => {},
  togglePatient: () => {},
  selectedPatient: {},
  setSelectedPatient: () => {},
  updateLogBook: () => {},
})
