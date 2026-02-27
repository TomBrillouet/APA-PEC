import { useState } from "react"
import { toastInfo, toastSuccess } from "../datas/toastmessages"
import { dateFr } from "../utils/math"
import { syncBothPatients } from "../api/patients"
import { useAuth } from "../context/AuthContext"

export const usePatients = () => {
  const { currentUser } = useAuth()
  const userId = currentUser?.uid
  const [patients, setPatients] = useState()

  const addNewPatient = (newPatient) => {
    setPatients((prev) => {
      const updatedPatients = [newPatient, ...prev]
      syncBothPatients(userId, updatedPatients)
      return updatedPatients
    })
    toastSuccess("Patient ajouté !")
  }

  const updatePatients = (patienToUpdate) => {
    setPatients((prev) => {
      const updatedPatients = prev.map((patient) =>
        patient.id === patienToUpdate.id ? patienToUpdate : patient,
      )
      syncBothPatients(userId, updatedPatients)
      return updatedPatients
    })
    toastInfo(
      `Dossier du patient ${patienToUpdate.lastName} ${patienToUpdate.firstName} mis à jour.`,
    )
  }

  const updateLogBook = (patientToUpdate, newEntry) => {
    setPatients((prev) => {
      const updatedPatients = prev.map((patient) =>
        patient.id === patientToUpdate.id
          ? {
              ...patient,
              logbook: [
                ...patient.logbook,
                { content: newEntry, date: dateFr(new Date()) },
              ],
            }
          : patient,
      )
      syncBothPatients(userId, updatedPatients)
      return updatedPatients
    })
  }

  return {
    addNewPatient,
    updatePatients,
    setPatients,
    patients,
    updateLogBook,
  }
}
