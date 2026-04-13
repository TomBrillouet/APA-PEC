import styled from "styled-components"
import { theme } from "../../theme"
import React from "react"

type InputFieldType = {
  children: React.ReactNode
  className?: string
}

export default function InputField({ children, className }: InputFieldType) {
  return <InputFieldStyled className={className}>{children}</InputFieldStyled>
}

const InputFieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;

  &.full {
    grid-column: 1 / -1;
  }

  label {
    font-size: 14px;
    font-weight: 600;
    color: #2c5282;
    letter-spacing: 0.02em;
  }

  input,
  textarea {
    padding: 8px 11px;
    border: 1.5px solid #b8d8f0;
    border-radius: 6px;
    background: #fff;
    font-size: 13px;
    color: ${theme.colors.darkBlue};
    outline: none;
    font-family: inherit;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    flex: 1;
    transition:
      border-color 0.15s,
      box-shadow 0.15s;

    &:disabled {
      cursor: not-allowed;
      background-color: #f0f4f8;
    }

    &::placeholder {
      color: #a0bcd4;
    }

    &:focus {
      border-color: #4a90c4;
      box-shadow: 0 0 0 3px rgba(74, 144, 196, 0.15);
    }
  }

  input[type="date"] {
    -webkit-appearance: none;
    appearance: none;
    min-width: 0;
    width: 100%;
  }

  textarea {
    resize: vertical;
    line-height: 1.5;
  }

  .select__control {
    border: 1.5px solid #b8d8f0;
    border-radius: 6px;
    background: #fff;
    font-size: 13.5px;
    min-height: 38px;
    box-shadow: none;
    transition:
      border-color 0.15s,
      box-shadow 0.15s;

    &:hover {
      border-color: #4a90c4;
    }
    &--is-focused {
      border-color: #4a90c4;
      box-shadow: 0 0 0 3px rgba(74, 144, 196, 0.15);
    }
  }

  .select__placeholder {
    color: #a0bcd4;
  }
  .select__single-value {
    color: ${theme.colors.darkBlue};
  }

  .select__option {
    font-size: 13.5px;
    &--is-focused {
      background: #e8f2fb;
      color: ${theme.colors.darkBlue};
    }
    &--is-selected {
      background: #4a90c4;
      color: #fff;
    }
  }

  .select__multi-value {
    background: #daedf9;
    border-radius: 4px;
    &__label {
      color: ${theme.colors.darkBlue};
      font-size: 12.5px;
    }
    &__remove:hover {
      background: #b8d8f0;
      color: ${theme.colors.darkBlue};
    }
  }

  .select__menu {
    border-radius: 6px;
    box-shadow: 0 6px 20px rgba(100, 149, 200, 0.2);
    overflow: hidden;
  }
`
