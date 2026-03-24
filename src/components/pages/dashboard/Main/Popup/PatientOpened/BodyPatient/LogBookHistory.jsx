import styled from "styled-components"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"

export default function LogBookHistory({ selectedPatient }) {
  return (
    <LogBookHistoryStyled>
      <h3>{PATIENT_LABELS.logbook}</h3>
      {selectedPatient.logbook.map((entry, index) => (
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
