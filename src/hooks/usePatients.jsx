import { useState } from "react"
import { fakePatients } from "../datas/fakePatients"

export const usePatients = () => {
  const [patients, setPatients] = useState(fakePatients)

  const addNewPatient = (newPatient) => {
    setPatients((prev) => [newPatient, ...prev])
  }

  const updatePatients = (patienToUpdate) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === patienToUpdate.id ? patienToUpdate : patient
      )
    )
  }

  return {
    addNewPatient,
    updatePatients,
    patients,
  }
}
