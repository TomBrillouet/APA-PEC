import { periodMaxDays } from "../../../../constants/rules"
import { getAge } from "../../../../utils/math"

export const getTotalPatients = (patients) => patients.length

export const getArchivedPatients = (patients) =>
  patients.filter((patient) => patient.archived).length

export const getActualPatients = (patients) =>
  patients.filter((patient) => !patient.archived).length

export const getAverageAge = (patients) =>
  parseInt(
    (
      patients.reduce((acc, patient) => (acc += getAge(patient.birth)), 0) /
      patients.length
    ).toFixed(0),
  )

export const getOlder = (patients) =>
  patients.reduce(
    (acc, patient) =>
      getAge(patient.birth) > acc ? (acc = getAge(patient.birth)) : acc,
    0,
  )

export const getYounger = (patients) =>
  patients.reduce(
    (acc, patient) =>
      getAge(patient.birth) < acc ? (acc = getAge(patient.birth)) : acc,
    Infinity,
  )

export const getWomen = (patients) =>
  patients.filter((patient) => patient.sex === "woman").length

export const getMen = (patients) =>
  patients.filter((patient) => patient.sex === "man").length

export const getEarlyQuit = (patients) => {
  const filterArchived = patients.filter((patient) => patient.archived)
  return filterArchived.filter((patient) => patient.bilans[0].type !== "final")
}

const comparableResults = (patient, i) =>
  patient.bilans[i].tests
    .flatMap((test) => test.results)
    .filter((result) => result.chart)

const isStagnant = (patient) => {
  const lastResults = comparableResults(patient, 0)
  const prevResults = comparableResults(patient, 1)
  return lastResults.some((result) => {
    const matchingResult = prevResults.find((r) => r.field === result.field)
    if (matchingResult) {
      return parseInt(result.value) <= parseInt(matchingResult.value)
    }
  })
}

export const getStagnantPatients = (patients) =>
  patients.filter((patient) => patient.bilans.length > 1).filter(isStagnant)

export const getInactivesPatients = (patients) => {
  const isInactive = (patient) => {
    if (!patient.bilans?.length) return true
    const today = new Date()
    const target = new Date(patient.bilans[0].date)
    return today - target > periodMaxDays * 24 * 60 * 60 * 1000
  }
  return patients.filter(isInactive)
}
