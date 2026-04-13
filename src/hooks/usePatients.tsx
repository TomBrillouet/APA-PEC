import { useState } from "react"
import { toastInfo, toastSuccess } from "../datas/toastmessages"
import { syncBothPatients } from "../api/patients"
import { useAuth } from "../context/AuthContext"
import { TOAST_LABELS } from "../constants/labels/toasts"
import { dateFr } from "../utils/math"
import { PatientsType, PatientType } from "../types"

export const usePatients = () => {
  const { currentUser } = useAuth()
  const userId = currentUser?.uid
  const [patients, setPatients] = useState<PatientsType | null>(null)

  const addNewPatient = (newPatient: PatientType) => {
    if (!userId) return
    if (!patients) return
    const updatedPatients = [newPatient, ...patients]
    setPatients(updatedPatients)
    syncBothPatients(userId, updatedPatients)
    toastSuccess(`${TOAST_LABELS.newPatient}`)
  }

  const updatePatients = (patientToUpdate: PatientType) => {
    if (!userId) return
    if (!patients) return
    const updatedPatients = patients.map((patient) =>
      patient.id === patientToUpdate.id ? patientToUpdate : patient,
    )
    setPatients(updatedPatients)
    syncBothPatients(userId, updatedPatients)
    toastInfo(
      `${TOAST_LABELS.recordPatient} ${patientToUpdate.lastName} ${patientToUpdate.firstName} ${TOAST_LABELS.updated}`,
    )
  }

  const updateLogBook = (patientToUpdate: PatientType, newEntry: string) => {
    if (!userId) return
    if (!patients) return
    const updatedPatients = patients.map((patient: PatientType) =>
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
    setPatients(updatedPatients)
    syncBothPatients(userId, updatedPatients)
  }

  return {
    addNewPatient,
    updatePatients,
    setPatients,
    patients,
    updateLogBook,
  }
}
