import InputField from "./InputField"

export default function TextArea({ onChange, name, label, rows, className }) {
  return (
    <InputField className={className}>
      <label>{label}</label>
      <textarea name={name} rows={rows} onChange={onChange} />
    </InputField>
  )
}
