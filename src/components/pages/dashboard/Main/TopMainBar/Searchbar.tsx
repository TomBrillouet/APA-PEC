import { CiSearch } from "react-icons/ci"
import Input from "../../../../reusable/Input"
import styled from "styled-components"
import { DASHBOARD_LABELS } from "../../../../../constants/labels/dashboard"
import React from "react"

export default function Searchbar({
  onChange,
}: {
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <SearchbarStyled>
      <Input
        type={"text"}
        placeholder={DASHBOARD_LABELS.search}
        onChange={onChange}
        className={"input-container"}
      />
      <CiSearch />
    </SearchbarStyled>
  )
}

const SearchbarStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .input-container {
    input {
      padding: 8px 50px 8px 15px;
    }
  }
  svg {
    position: absolute;
    right: 10px;
    font-size: 20px;
    color: #1a3a5c7f;
  }
  button {
    margin-left: auto;
  }
`
