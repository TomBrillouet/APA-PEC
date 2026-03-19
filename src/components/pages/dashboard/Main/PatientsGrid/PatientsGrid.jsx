import styled from "styled-components"
import PatientCard from "./PatientCard"
import { MainContext } from "../../../../../context/MainContext"
import { useContext } from "react"
import {
  getEarlyQuit,
  getStagnantPatients,
  getInactivesPatients,
} from "../../helpers/stats.js"

export default function PatientsGrid({ patients, togglePatient }) {
  const { handleSelectedPatient } = useContext(MainContext)
  const handleOpen = (id) => {
    const patientToOpen = patients.find((item) => id === item.id)
    handleSelectedPatient(patientToOpen)
    togglePatient(patientToOpen)
  }

  const earlyQuits = getEarlyQuit(patients)
  const stagnants = getStagnantPatients(patients)
  const inactives = getInactivesPatients(patients)

  return (
    <PatientsGridStyled>
      {patients.map((patient) => {
        const flags = {
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
