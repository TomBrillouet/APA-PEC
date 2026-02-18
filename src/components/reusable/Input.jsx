import styled from "styled-components"

export default function Input({
  label,
  type,
  name,
  onChange,
  isRequired,
  placeholder,
  className,
}) {
  return (
    <InputStyled className={className}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        required={isRequired}
        placeholder={placeholder}
      />
    </InputStyled>
  )
}

const InputStyled = styled.div``
