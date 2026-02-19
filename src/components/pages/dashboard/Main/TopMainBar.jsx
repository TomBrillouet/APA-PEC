import styled from "styled-components"
import SectionTitle from "./AddPatient/Form/SectionTitle"
import Searchbar from "./Searchbar"
import Button from "../../../reusable/Button"

export default function TopMainBar({ onChange, onClick }) {
  return (
    <TopMainBarStyled>
      <SectionTitle label={"PEC en cours"} />
      <Searchbar onChange={onChange} />
      <Button label={"Ajouter un patient"} onClick={onClick} />
    </TopMainBarStyled>
  )
}

const TopMainBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e2a38;
  margin-bottom: 20px;
`
