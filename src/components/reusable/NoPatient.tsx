import styled from "styled-components"
import { theme } from "../../theme"

export default function NoPatient({ archived }: { archived?: boolean }) {
  return (
    <NoPatientStyled>
      {archived ? (
        <span>Vous n'avez aucun patient archivé :)</span>
      ) : (
        <span>Vous n'avez personne à prendre en charge :(</span>
      )}
    </NoPatientStyled>
  )
}

const NoPatientStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100%;
  margin-top: 12%;
  span {
    font-size: 36px;
    color: ${theme.colors.text};
  }
`
