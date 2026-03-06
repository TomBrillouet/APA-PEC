import { getPatients } from "../../../../../api/patients"
import { getPro } from "../../../../../api/pro"
import { getListTests } from "../../../../../api/tests"
import { fakeTests } from "../../../../../datas/fakeTests"

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
  await initialisePatients(userId, setPatients)
}

export const initialiseListTests = async (userId, setListTests) => {
  const listTestsReceived = await getListTests(userId)
  setListTests(listTestsReceived.length > 0 ? listTestsReceived : fakeTests)
}
