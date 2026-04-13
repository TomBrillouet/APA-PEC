import styled from "styled-components"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"
import { LogBookEntryType, PatientType } from "../../../../../../../types"

export default function LogBookHistory({
  selectedPatient,
}: {
  selectedPatient: PatientType
}) {
  return (
    <LogBookHistoryStyled>
      <h3>{PATIENT_LABELS.logbook}</h3>
      {selectedPatient.logbook.map((entry: LogBookEntryType, index: number) => (
        <div key={index}>
          <hr />
          <b>{entry.date}</b>
          <br />
          <p>{entry.content}</p>
        </div>
      ))}
    </LogBookHistoryStyled>
  )
}

const LogBookHistoryStyled = styled.div`
  max-width: 800px;
  p,
  b {
    font-size: 14px;
    color: #4e4e4e;
    font-style: italic;
    white-space: pre-wrap;
  }
  p,
  hr {
    margin: 0;
  }
`
