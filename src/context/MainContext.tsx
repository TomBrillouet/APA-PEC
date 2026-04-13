import React, { createContext } from "react"
import {
  BilanType,
  ListTestsType,
  PatientType,
  ProType,
  TestSelectedType,
} from "../types"
import { MultiValue } from "react-select"
import { EMPTY_PRO } from "../constants/models/pro"

type MainContextType = {
  addNewPatient: (_newPatient: PatientType) => void
  updatePatients: (_patientToUpdate: PatientType) => void
  toggleAddPatient: () => void
  togglePatient: (_patientToToggle: PatientType | null) => void
  toggleProInfo: () => void
  toggleNewBilan: () => void
  isNewBilan: boolean
  selectedPatient: PatientType | null
  handleSelectedPatient: (_selectedPatient: PatientType | null) => void
  handleBilanDataChange: (_e: React.ChangeEvent<HTMLInputElement>) => void
  updateLogBook: (_patientToUpdate: PatientType, _newEntry: string) => void
  bilanData: BilanType | null
  handleRemarquesChange: (_testName: string, _value: string) => void
  testsSelectChange: (_testsSelected: MultiValue<TestSelectedType>) => void
  toggleOldBilan: () => void
  handleSelectedBilan: (_selectedBilan: BilanType | null) => void
  selectedBilan: BilanType | null
  pro: ProType | null
  proSubmit: (_newProInfos: ProType) => void
  isLoading: boolean
  addPatient: boolean
  isProOpen: boolean
  closeOldBilan: () => void
  listTests: ListTestsType
}

export const MainContext = createContext<MainContextType>({
  addNewPatient: () => {},
  updatePatients: () => {},
  toggleAddPatient: () => {},
  togglePatient: () => {},
  toggleProInfo: () => {},
  toggleNewBilan: () => {},
  isNewBilan: false,
  selectedPatient: null,
  handleSelectedPatient: () => {},
  handleBilanDataChange: () => {},
  updateLogBook: () => {},
  bilanData: null,
  handleRemarquesChange: () => {},
  testsSelectChange: () => [],
  toggleOldBilan: () => {},
  handleSelectedBilan: () => {},
  selectedBilan: null,
  pro: EMPTY_PRO,
  proSubmit: () => {},
  isLoading: false,
  addPatient: false,
  isProOpen: false,
  closeOldBilan: () => {},
  listTests: [],
})
