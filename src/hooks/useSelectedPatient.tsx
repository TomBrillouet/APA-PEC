import { useState } from "react"
import { PatientType } from "../types"

export const useSelectedPatient = () => {
  const [selectedPatient, setSelectedPatient] = useState<PatientType | null>(
    null,
  )
  const handleSelectedPatient = (selectedPatient: PatientType | null) => {
    setSelectedPatient(selectedPatient)
  }
  return { selectedPatient, handleSelectedPatient }
}
