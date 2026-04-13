import { createContext } from "react"
import { PatientsType, PatientType } from "../types"

type PatientsContextType = {
  patients: PatientsType | null
  setPatients: (_patients: PatientsType) => void
  addNewPatient: (_patient: PatientType) => void
  updatePatients: (_updatedPatient: PatientType) => void
  updateLogBook: (_patientToUpdate: PatientType, _newEntry: string) => void
}

export const PatientsContext = createContext<PatientsContextType>({
  patients: [],
  setPatients: () => {},
  addNewPatient: () => {},
  updatePatients: () => {},
  updateLogBook: () => {},
})
