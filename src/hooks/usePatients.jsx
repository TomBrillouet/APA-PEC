import { useState } from "react"
import { fakePatients } from "../datas/fakePatients"

export const usePatients = () => {
  const [patients, setPatients] = useState(fakePatients)

  const addNewPatient = (newPatient) => {
    setPatients((prev) => [newPatient, ...prev])
  }

  return {
    addNewPatient,
    patients,
  }
}
