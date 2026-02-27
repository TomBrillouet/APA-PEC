import styled from "styled-components"
import TitleSection from "../../../../../../reusable/TitleSection"

export default function FormSection({ label, children, block }) {
  return (
    <FormSectionStyled>
      <TitleSection label={label} />
      <div className={block ? "block" : "grid"}>{children}</div>
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
