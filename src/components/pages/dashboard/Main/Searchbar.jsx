import Input from "../../../reusable/Input"

export default function Searchbar({ onChange }) {
  return (
    <div>
      <Input
        type={"text"}
        placeholder={"Rechercher un patient..."}
        onChange={onChange}
      />
    </div>
  )
}
