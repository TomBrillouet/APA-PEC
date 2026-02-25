import Input from "../../../../../../../../reusable/Input"
import InputSection from "../../../../../../../../reusable/InputSection"
import { identityInputs } from "../../../../AddPatient/config/identityInputs.jsx"

export default function NewShapeValues({
  handleChange,
  handleBilanDataChange,
}) {
  const handleChangeBoth = (e) => {
    handleChange(e)
    handleBilanDataChange(e)
  }
  const mapInputs = (array) =>
    array.map((input) => {
      if (input.name === "height" || input.name === "weight") {
        return (
          <Input
            key={input.name}
            className={"field"}
            label={input.label}
            type={input.type}
            name={input.name}
            onChange={handleChangeBoth}
            isRequired={input.isRequired}
            placeholder={input.placeholder}
          />
        )
      }
    })
  return <InputSection datas={mapInputs(identityInputs)} />
}
