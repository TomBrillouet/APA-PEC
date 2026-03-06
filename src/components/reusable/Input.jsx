import InputField from "./InputField"

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
}) {
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
