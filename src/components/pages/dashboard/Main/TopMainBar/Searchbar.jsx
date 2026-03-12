import { CiSearch } from "react-icons/ci"
import Input from "../../../../reusable/Input"
import styled from "styled-components"

export default function Searchbar({ onChange }) {
  return (
    <SearchbarStyled>
      <Input
        type={"text"}
        placeholder={"Rechercher un patient..."}
        onChange={onChange}
      />
      <CiSearch />
    </SearchbarStyled>
  )
}

const SearchbarStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
