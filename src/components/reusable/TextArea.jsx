import InputField from "./InputField"

export default function TextArea({
  onChange,
  name,
  label,
  rows,
  className,
  placeholder,
  value,
}) {
  return (
    <InputField className={className}>
      <label>{label}</label>
      <textarea
        value={value}
        name={name}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
      />
    </InputField>
  )
}
