import React from "react"
import Input from "../../../../../../../../reusable/Input"
import { BilanType } from "../../../../../../../../../types"
import FormSection from "../../../../AddPatient/Form/FormSection"
import InputField from "../../../../../../../../reusable/InputField"

type BilanDateType = {
  handleBilanDataChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void
  bilanData: BilanType
  disabled?: boolean
}

export default function BilanDate({
  handleBilanDataChange,
  bilanData,
  disabled,
}: BilanDateType) {
  return (
    <FormSection label="Date du Bilan" block>
      <InputField className="field full">
        <Input
          onChange={handleBilanDataChange}
          type={"date"}
          value={bilanData.date}
          name={"date"}
          disabled={disabled}
          max={new Date().toISOString().slice(0, 10)}
        />
      </InputField>
    </FormSection>
  )
}
