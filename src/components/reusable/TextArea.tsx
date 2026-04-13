import React from "react"
import InputField from "./InputField"

type TextAreaType = {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  name: string
  label: string
  rows?: number
  className?: string
  placeholder?: string
  value?: string
  disabled?: boolean
  isRequired?: boolean
}

export default function TextArea({
  onChange,
  name,
  label,
  rows,
  className,
  placeholder,
  value,
  disabled,
  isRequired,
}: TextAreaType) {
  return (
    <InputField className={className}>
      <label>{label}</label>
      <textarea
        value={value}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
        required={isRequired}
      />
    </InputField>
  )
}
