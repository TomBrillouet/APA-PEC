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
      <div className="flex-container">
        <Searchbar onChange={onChange} />
        <Button label={"Ajouter un patient"} onClick={onClick} />
      </div>
    </TopMainBarStyled>
  )
}

const TopMainBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  color: #1e2a38;
  margin-bottom: 20px;
  gap: 15px;
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    gap: 30px;
  }
`
