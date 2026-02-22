import styled from "styled-components"

export default function LogBookHistory({ selectedPatient }) {
  return (
    <LogBookHistoryStyled>
      <h3>Comptes rendus</h3>
      {selectedPatient.logbook.map((entry, index) =>
        entry === "hr" ? (
          <div key={index}>
            <hr />
          </div>
        ) : (
          <div key={index}>
            <b>{entry.date}</b>
            <br />
            <p>{entry.content}</p>
          </div>
        )
      )}
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
