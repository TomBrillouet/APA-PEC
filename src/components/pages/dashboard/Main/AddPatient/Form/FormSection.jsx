import styled from "styled-components"
import TitleSection from "../../../../../reusable/TitleSection"

export default function FormSection({ label, children }) {
  return (
    <FormSectionStyled>
      <TitleSection label={label} />
      <div className="grid">{children}</div>
    </FormSectionStyled>
  )
}

const FormSectionStyled = styled.section`
  padding: 16px 0 8px;
  border-bottom: 1px solid #cce0f5;

  &:last-of-type {
    border-bottom: none;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 20px;
  }
`
