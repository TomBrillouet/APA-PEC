import styled from "styled-components"
import Searchbar from "./Searchbar.js"
import SectionTitle from "../Popup/AddPatient/Form/SectionTitle.js"
import Button from "../../../../reusable/Button.js"
import { IoMdAddCircle } from "react-icons/io"
import { DASHBOARD_LABELS } from "../../../../../constants/labels/dashboard.js"
import React from "react"

type TopMainBarType = {
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
  archived: boolean
}

export default function TopMainBar({
  onChange,
  onClick,
  archived,
}: TopMainBarType) {
  return (
    <TopMainBarStyled>
      <SectionTitle
        label={
          DASHBOARD_LABELS.topMainBarTitle +
          ` ${archived ? "terminées" : "en cours"}`
        }
      />
      <div className="flex-container">
        <Searchbar onChange={onChange} />
        <Button
          label={DASHBOARD_LABELS.addPatient}
          icon={<IoMdAddCircle />}
          onClick={onClick}
        />
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
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    gap: 30px;
  }
`
