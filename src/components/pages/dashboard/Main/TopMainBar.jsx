import styled from "styled-components"
import Searchbar from "./Searchbar"
import SectionTitle from "./Popup/AddPatient/Form/SectionTitle.jsx"
import Button from "../../../reusable/Button"

export default function TopMainBar({ onChange, onClick, archived }) {
  return (
    <TopMainBarStyled>
      <SectionTitle
        label={`Prise en charge ${archived ? "terminée" : "en cours"}`}
      />
      <Searchbar onChange={onChange} />
      <Button label={"Ajouter un patient"} onClick={onClick} />
    </TopMainBarStyled>
  )
}

const TopMainBarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e2a38;
  margin-bottom: 20px;
  gap: 10px;
`
