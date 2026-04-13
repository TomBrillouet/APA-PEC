import React from "react"
import InputField from "./InputField"

type InputType = {
  label?: string | React.ReactNode
  type: string
  name?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  isRequired?: boolean
  placeholder?: string
  className?: string
  value?: string
  disabled?: boolean
  autoComplete?: string
  min?: number | string
  max?: number | string
  minLength?: number
  pattern?: string
}

export default function Input({
  label,
  type,
  name,
  onChange,
  isRequired,
  placeholder,
  className,
  value,
  disabled,
  autoComplete,
  min,
  max,
  minLength,
  pattern,
}: InputType) {
  return (
    <InputField className={className}>
      {label && <label>{label}</label>}
      <input
        autoComplete={autoComplete}
        type={type}
        name={name}
        onChange={onChange}
        required={isRequired}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        minLength={minLength}
        pattern={pattern}
      />
    </InputField>
  )
}
