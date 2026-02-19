import InputField from "./InputField"

export default function Input({
  label,
  type,
  name,
  onChange,
  isRequired,
  placeholder,
  className,
}) {
  return (
    <InputField className={className}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        required={isRequired}
        placeholder={placeholder}
      />
    </InputField>
  )
}
