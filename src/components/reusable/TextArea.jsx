import styled from "styled-components"

export default function TextArea({ onChange, name, label, rows, className }) {
  return (
    <TextAreaStyled className={className}>
      <label>{label}</label>
      <textarea name={name} rows={rows} onChange={onChange} />
    </TextAreaStyled>
  )
}

const TextAreaStyled = styled.div``
