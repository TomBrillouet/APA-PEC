export const getInactivesPatients = (patients) => {
  const isInactive = (patient) => {
    if (!patient.bilans?.length) return true
    const today = new Date()
    const target = new Date(patient.bilans[0].date)
    return today - target > 120 * 24 * 60 * 60 * 1000
  }
  return patients.filter(isInactive)
}
