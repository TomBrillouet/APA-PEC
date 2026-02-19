import { useState } from "react"
import { fakePatients } from "../datas/fakePatients"

export const usePatients = () => {
  const [patients, setPatients] = useState(fakePatients)

  const addNewPatient = (newPatient) => {
    const patientsCopy = [...patients]
    const patientsUpdated = [newPatient, ...patientsCopy]
    setPatients(patientsUpdated)
  }

  return {
    addNewPatient,
    patients,
  }
}
