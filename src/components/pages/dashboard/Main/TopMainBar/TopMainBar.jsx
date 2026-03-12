import styled from "styled-components"
import Searchbar from "./Searchbar.jsx"
import SectionTitle from "../Popup/AddPatient/Form/SectionTitle.jsx"
import Button from "../../../../reusable/Button.jsx"

export default function TopMainBar({ onChange, onClick, archived }) {
  return (
    <TopMainBarStyled>
      <SectionTitle
        label={`Prises en charge ${archived ? "terminées" : "en cours"}`}
      />
      <Searchbar onChange={onChange} />
      <Button label={"Ajouter un patient"} onClick={onClick} />
    </TopMainBarStyled>
  )
}

const TopMainBarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e2a38;
  margin-bottom: 20px;
  gap: 10px;
`
