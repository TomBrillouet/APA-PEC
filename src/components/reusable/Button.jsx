import styled, { css } from "styled-components"
import { theme } from "../../theme"

export default function Button({
  onClick,
  label,
  type,
  disabled,
  version = "primary",
}) {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      version={version}
      disabled={disabled}
    >
      {label}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  padding: 9px 22px;
  font-size: 13.5px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  font-family: inherit;
  transition: background 0.15s, transform 0.1s;
  &:disabled {
    opacity: 0.5;
  }

  ${({ version }) => extraStyle[version]}
`

const extraStyleCancel = css`
  background: transparent;
  border: 1.5px solid #b8d8f0;
  color: #4a90c4;
  &:hover {
    background: #daedf9;
  }
`

const extraStyleSubmit = css`
  background: #4a90c4;
  color: #fff;
  box-shadow: 0 3px 10px rgba(74, 144, 196, 0.3);
  &:hover {
    background: #2c6ea0;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`

const extraStylePrimary = css`
  background: ${theme.colors.primary};
  color: #fff;
  box-shadow: 0 3px 10px rgba(196, 74, 74, 0.3);
  &:hover {
    background: #8a1717;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`

const extraStyle = {
  cancel: extraStyleCancel,
  submit: extraStyleSubmit,
  primary: extraStylePrimary,
}
