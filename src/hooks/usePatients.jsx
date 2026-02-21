import { useState } from "react"
import { fakePatients } from "../datas/fakePatients"
import { toastInfo, toastSuccess } from "../datas/toastmessages"

export const usePatients = () => {
  const [patients, setPatients] = useState(fakePatients)

  const addNewPatient = (newPatient) => {
    setPatients((prev) => [newPatient, ...prev])
    toastSuccess("Patient ajouté !")
    console.log(newPatient)
  }

  const updatePatients = (patienToUpdate) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === patienToUpdate.id ? patienToUpdate : patient
      )
    )
    toastInfo("Informations du patient mises à jour.")
  }

  return {
    addNewPatient,
    updatePatients,
    patients,
  }
}
