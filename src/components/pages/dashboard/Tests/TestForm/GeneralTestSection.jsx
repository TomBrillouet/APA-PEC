import Input from "../../../../reusable/Input"
import TextArea from "../../../../reusable/TextArea"

export default function GeneralTestSection({ inputsValue, handleChange }) {
  return (
    <>
      <Input
        name={"name"}
        label={"Nom du test"}
        type={"text"}
        value={inputsValue.name}
        onChange={handleChange}
      />
      <TextArea
        name={"description"}
        label={"Description"}
        value={inputsValue.description}
        onChange={handleChange}
      />
    </>
  )
}
