import { createContext } from "react"

export const MainContext = createContext({
  addNewPatient: () => {},
  updatePatients: () => {},
  toggleAddPatient: () => {},
  togglePatient: () => {},
  toggleProInfo: () => {},
  toggleNewBilan: () => {},
  isNewBilan: false,
  selectedPatient: {},
  updateLogBook: () => {},
  handleBilanDataChange: () => {},
  bilanData: {},
  handleResultChange: () => {},
  handleRemarquesChange: () => {},
  testsSelectChange: () => {},
  isOldBilanOpened: false,
  toggleOldBilan: () => {},
  selectedBilan: null,
  handleSelectedBilan: () => {},
  pro: {},
  proSubmit: () => {},
})
