import styled, { css } from "styled-components"
import { theme } from "../../theme"
import React from "react"

type VersionType =
  | "primary"
  | "cancel"
  | "submit"
  | "red"
  | "minimalist"
  | "minimalistred"

type ButtonType = {
  onClick?: (_e: React.MouseEvent<HTMLButtonElement>) => void
  label: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  version?: VersionType
  className?: string
  icon?: React.ReactNode
}

export default function Button({
  onClick,
  label,
  type,
  disabled,
  version = "primary",
  className,
  icon,
}: ButtonType) {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      version={version}
      disabled={disabled}
      className={className}
    >
      <span>
        {label}
        {icon}
      </span>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button<{
  version: VersionType
}>`
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
  span {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    svg {
      font-size: 18px;
    }
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

const extraStyleMinimalistred = css`
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;
  background: transparent;
  border: 1.5px solid #c75b58;
  color: #c75b58;
  &:not(:disabled):hover {
    background: #a64b481c;
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
  minimalistred: extraStyleMinimalistred,
}
