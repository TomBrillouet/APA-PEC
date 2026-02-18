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

  .field {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &.full {
      grid-column: 1 / -1;
    }

    label {
      font-size: 12px;
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
      font-size: 13.5px;
      color: #1a3a5c;
      outline: none;
      font-family: inherit;
      box-sizing: border-box;
      width: 100%;
      transition: border-color 0.15s, box-shadow 0.15s;

      &::placeholder {
        color: #a0bcd4;
      }

      &:focus {
        border-color: #4a90c4;
        box-shadow: 0 0 0 3px rgba(74, 144, 196, 0.15);
      }
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
      transition: border-color 0.15s, box-shadow 0.15s;

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
      color: #1a3a5c;
    }

    .select__option {
      font-size: 13.5px;
      &--is-focused {
        background: #e8f2fb;
        color: #1a3a5c;
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
        color: #1a3a5c;
        font-size: 12.5px;
      }
      &__remove:hover {
        background: #b8d8f0;
        color: #1a3a5c;
      }
    }

    .select__menu {
      border-radius: 6px;
      box-shadow: 0 6px 20px rgba(100, 149, 200, 0.2);
      overflow: hidden;
    }
  }
`
