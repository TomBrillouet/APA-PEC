import { periodMaxDays } from "../../../../constants/config/rules"
import {
  PatientsType,
  PatientType,
  ResultType,
  TestType,
} from "../../../../types"
import { getAge } from "../../../../utils/math"

export const getTotalPatients = (patients: PatientsType) => patients.length

export const getArchivedPatients = (patients: PatientsType) =>
  patients.filter((patient) => patient.archived).length

export const getActualPatients = (patients: PatientsType) =>
  patients.filter((patient) => !patient.archived).length

export const getAverageAge = (patients: PatientsType) =>
  parseInt(
    (
      patients.reduce((acc, patient) => (acc += getAge(patient.birth)), 0) /
      patients.length
    ).toFixed(0),
  )

export const getOlder = (patients: PatientsType) =>
  patients.reduce(
    (acc, patient) =>
      getAge(patient.birth) > acc ? (acc = getAge(patient.birth)) : acc,
    0,
  )

export const getYounger = (patients: PatientsType) =>
  patients.reduce(
    (acc, patient) =>
      getAge(patient.birth) < acc ? (acc = getAge(patient.birth)) : acc,
    Infinity,
  )

export const getWomen = (patients: PatientsType) =>
  patients.filter((patient) => patient.sex === "woman").length

export const getMen = (patients: PatientsType) =>
  patients.filter((patient) => patient.sex === "man").length

export const getEarlyQuit = (patients: PatientsType) => {
  const filterArchived = patients.filter((patient) => patient.archived)
  return filterArchived.filter((patient) => patient.bilans[0].type !== "final")
}

const comparableResults = (patient: PatientType, i: number) =>
  patient.bilans[i].tests
    .flatMap((test: TestType) => test.results)
    .filter((result: ResultType) => result.chart)

const isStagnant = (patient: PatientType) => {
  const lastResults = comparableResults(patient, 0)
  const prevResults = comparableResults(patient, 1)
  return lastResults.some((result: ResultType) => {
    const matchingResult = prevResults.find(
      (r: ResultType) => r.field === result.field,
    )
    if (matchingResult) {
      return parseInt(result.value) <= parseInt(matchingResult.value)
    }
  })
}

export const getStagnantPatients = (patients: PatientsType) =>
  patients
    .filter((patient: PatientType) => patient.bilans.length > 1)
    .filter(isStagnant)

export const getInactivesPatients = (patients: PatientsType) => {
  const isInactive = (patient: PatientType) => {
    if (!patient.bilans?.length) return true
    const today = new Date()
    const target = new Date(patient.bilans[0].date)
    return (
      today.getTime() - target.getTime() > periodMaxDays * 24 * 60 * 60 * 1000
    )
  }
  return patients.filter(isInactive)
}
