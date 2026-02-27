import { getPatients } from "../../../../../api/patients"
import { getPro } from "../../../../../api/pro"

const initialisePro = async (userId, setPro) => {
  const proReceived = await getPro(userId)
  setPro(proReceived)
}

const initialisePatients = async (userId, setPatients) => {
  const patientsReceived = await getPatients(userId)
  setPatients(patientsReceived)
}

export const initialiseUserSession = async (userId, setPro, setPatients) => {
  await initialisePro(userId, setPro)
  initialisePatients(userId, setPatients)
}
