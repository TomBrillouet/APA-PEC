import { useState } from "react"
import { fakePatients } from "../datas/fakePatients"
import { toastInfo, toastSuccess } from "../datas/toastmessages"
import { dateFr } from "../utils/math"

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
    toastInfo(
      `Dossier du patient ${patienToUpdate.lastName} ${patienToUpdate.firstName} mis à jour.`
    )
  }

  const updateLogBook = (patientToUpdate, newEntry) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === patientToUpdate.id
          ? {
              ...patient,
              logbook: [
                ...patient.logbook,
                "hr",
                { content: newEntry, date: dateFr(new Date()) },
              ],
            }
          : patient
      )
    )
  }

  return {
    addNewPatient,
    updatePatients,
    patients,
    updateLogBook,
  }
}
