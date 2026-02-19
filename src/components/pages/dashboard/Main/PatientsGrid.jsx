import styled from "styled-components"
import PatientCard from "./PatientCard"

export default function PatientsGrid({ patients }) {
  return (
    <PatientsGridStyled>
      {patients.map((patient) => (
        <PatientCard
          id={patient.id}
          key={patient.id}
          isMan={patient.sex === "man"}
          firstName={patient.firstName}
          lastName={patient.lastName}
        />
      ))}
    </PatientsGridStyled>
  )
}

const PatientsGridStyled = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  align-content: start;
  gap: 16px;
  padding: 24px;
  min-height: 71%;
`
