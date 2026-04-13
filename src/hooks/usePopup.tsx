import { useState } from "react"
import { PatientType } from "../types"

export const usePopup = (
  handleSelectedPatient: (_selectedPatient: PatientType | null) => void,
  closeOldBilan: () => void,
) => {
  const [addPatient, setAddPatient] = useState(false)
  const [isProOpen, setIsProOpen] = useState(false)
  const [isNewBilan, setIsNewBilan] = useState(false)

  const togglePatient = (patientToToggle: PatientType | null) => {
    if (patientToToggle === null) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
    handleSelectedPatient(patientToToggle ?? null)
    setIsNewBilan(false)
    closeOldBilan()
  }

  return {
    togglePatient,
    isNewBilan,
    toggleNewBilan: () => setIsNewBilan((prev) => !prev),
    toggleAddPatient: () => setAddPatient((prev) => !prev),
    toggleProInfo: () => setIsProOpen((prev) => !prev),
    addPatient,
    isProOpen,
  }
}
