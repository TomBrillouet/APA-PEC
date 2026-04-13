import { getPatients } from "../../../../../api/patients"
import { getPro } from "../../../../../api/pro"
import { getListTests } from "../../../../../api/tests"
import { EMPTY_PRO } from "../../../../../constants/models/pro"
import { fakeTests } from "../../../../../datas/fakeTests"
import { ListTestsType, PatientsType, ProType } from "../../../../../types"

export const initialisePro = async (
  userId: string,
  setPro: (_pro: ProType) => void,
  setIsLoading: (_isLoading: boolean) => void,
) => {
  setIsLoading(true)
  const proReceived = await getPro(userId)
  if (Object.keys(proReceived).length === 0 || !proReceived) {
    setPro(EMPTY_PRO)
    return
  }
  setPro(proReceived)
  setIsLoading(false)
}

export const initialisePatients = async (
  userId: string,
  setPatients: (_patients: PatientsType) => void,
) => {
  const patientsReceived = await getPatients(userId)
  setPatients(patientsReceived)
}

export const initialiseUserSession = async (
  userId: string,
  setPro: (_pro: ProType) => void,
  setPatients: (_patients: PatientsType) => void,
  setIsLoading: (_isLoading: boolean) => void,
) => {
  await initialisePro(userId, setPro, setIsLoading)
  await initialisePatients(userId, setPatients)
}

export const initialiseListTests = async (
  userId: string,
  setListTests: (_listTests: ListTestsType) => void,
) => {
  const listTestsReceived = await getListTests(userId)
  setListTests(listTestsReceived.length > 0 ? listTestsReceived : fakeTests)
}
