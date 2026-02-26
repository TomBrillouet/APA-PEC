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
  border: none;
  font-family: inherit;
  transition:
    background 0.15s,
    transform 0.1s;
  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.2;
  }

  ${({ version }) => extraStyle[version]}
`

const extraStyleCancel = css`
  background: transparent;
  border: 1.5px solid #b8d8f0;
  color: #4a90c4;

  &:not(:disabled):hover {
    background: #daedf9;
  }
`

const extraStyleSubmit = css`
  background: #4a90c4;
  color: #fff;
  box-shadow: 0 3px 10px rgba(74, 144, 196, 0.3);
  &:not(:disabled):hover {
    background: #2c6ea0;
    transform: translateY(-1px);
  }
  &:not(:disabled):active {
    transform: translateY(0);
  }
`

const extraStylePrimary = css`
  background: ${theme.colors.primary};
  color: #fff;
  box-shadow: 0 3px 10px rgba(74, 196, 80, 0.3);
  &:not(:disabled):hover {
    background: #48a64b;
    transform: translateY(-1px);
  }
  &:not(:disabled):active {
    transform: translateY(0);
  }
`

const extraStyleRed = css`
  background: #c75b58;
  color: #fff;
  box-shadow: 0 3px 10px rgba(196, 94, 74, 0.3);
  &:not(:disabled):hover {
    background: #a64b48;
    transform: translateY(-1px);
  }
  &:not(:disabled):active {
    transform: translateY(0);
  }
`

const extraStyleMinimalist = css`
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;
  background: transparent;
  border: 1.5px solid #b8d8f0;
  color: #4a90c4;
  &:not(:disabled):hover {
    background: #daedf9;
  }
  &:not(:disabled):active {
    background: transparent;
  }
`

const extraStyle = {
  cancel: extraStyleCancel,
  submit: extraStyleSubmit,
  primary: extraStylePrimary,
  red: extraStyleRed,
  minimalist: extraStyleMinimalist,
}
