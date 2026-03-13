import InputField from "./InputField"

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
}) {
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
