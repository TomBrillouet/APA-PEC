import { useState } from "react"

export const useSelectedPatient = () => {
  const [selectedPatient, setSelectedPatient] = useState(null)
  const handleSelectedPatient = (selectedPatient) => {
    setSelectedPatient(selectedPatient)
  }
  return { selectedPatient, handleSelectedPatient }
}
