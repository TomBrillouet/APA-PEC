import styled from "styled-components"
import PatientCard from "./PatientCard"
import {
  getEarlyQuit,
  getStagnantPatients,
  getInactivesPatients,
} from "../../helpers/stats.js"
import NoPatient from "../../../../reusable/NoPatient"
import Loader from "../../../../reusable/Loader"
import { FlagsType, PatientsType, PatientType } from "../../../../../types"

type PatientsGridType = {
  patients: PatientsType | null
  togglePatient: (_patient: PatientType | null) => void
  archived: boolean
}

export default function PatientsGrid({
  patients,
  togglePatient,
  archived,
}: PatientsGridType) {
  if (!patients)
    return (
      <PatientsGridStyled style={{ display: "block" }}>
        <Loader />
      </PatientsGridStyled>
    )
  const handleOpen = (id: string) => {
    const patientToOpen: PatientType | null =
      patients.find((patient: PatientType) => id === patient.id) || null
    togglePatient(patientToOpen)
  }

  const earlyQuits = getEarlyQuit(patients)
  const stagnants = getStagnantPatients(patients)
  const inactives = getInactivesPatients(patients)

  if (patients.length === 0) {
    return (
      <PatientsGridStyled style={{ display: "block" }}>
        <NoPatient archived={archived} />
      </PatientsGridStyled>
    )
  }

  return (
    <PatientsGridStyled>
      {patients.map((patient: PatientType) => {
        const flags: FlagsType = {
          isArchived: patient.archived,
          isEarlyQuit: earlyQuits.find((el) => el.id === patient.id),
          isStagnant: stagnants.find((el) => el.id === patient.id),
          isInactive: inactives.find((el) => el.id === patient.id),
        }
        return (
          <PatientCard
            id={patient.id}
            key={patient.id}
            isMan={patient.sex === "man"}
            firstName={patient.firstName}
            lastName={patient.lastName}
            onClick={() => handleOpen(patient.id)}
            flags={flags}
          />
        )
      })}
    </PatientsGridStyled>
  )
}

const PatientsGridStyled = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 20px 7px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  align-content: start;
  gap: 16px;
  padding: 24px;
  min-height: 71%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }
`
