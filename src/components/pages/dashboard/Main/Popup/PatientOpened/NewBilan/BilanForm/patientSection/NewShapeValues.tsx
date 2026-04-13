import React from "react"
import Input from "../../../../../../../../reusable/Input"
import InputSection from "../../../../../../../../reusable/InputSection"
import { identityInputs } from "../../../../AddPatient/config/identityInputs.js"

type NewShapeValuesType = {
  handleChange: (_e: React.ChangeEvent<HTMLInputElement>) => void
  handleBilanDataChange: (_e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function NewShapeValues({
  handleChange,
  handleBilanDataChange,
}: NewShapeValuesType) {
  const handleChangeBoth = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e)
    handleBilanDataChange(e)
  }
  const inputs = identityInputs.map((input) => {
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
          min={input.min}
          max={input.max}
        />
      )
    }
  })
  return <InputSection datas={inputs} label="Nouvelle prise de mesure" />
}
