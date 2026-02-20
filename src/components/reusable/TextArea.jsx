import InputField from "./InputField"

export default function TextArea({
  onChange,
  name,
  label,
  rows,
  className,
  placeholder,
}) {
  return (
    <InputField className={className}>
      <label>{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
      />
    </InputField>
  )
}
