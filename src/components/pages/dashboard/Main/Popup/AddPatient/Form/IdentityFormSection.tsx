import Select, { ActionMeta, SingleValue } from "react-select"
import FormSection from "./FormSection"
import InputField from "../../../../../../reusable/InputField"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"
import React from "react"

type IdentityFormSectionType = {
  datas: React.ReactNode
  onSexChange: (
    _newValue: SingleValue<{ value: string; label: string }>,
    _actionMeta: ActionMeta<{ value: string; label: string }>,
  ) => void
}

export default function IdentityFormSection({
  datas,
  onSexChange,
}: IdentityFormSectionType) {
  return (
    <FormSection label={PATIENT_LABELS.identity}>
      <InputField className="field">
        <div>
          <label>Sexe</label>
          <Select
            required
            name="sex"
            options={[
              { value: "man", label: PATIENT_LABELS.man },
              { value: "woman", label: PATIENT_LABELS.woman },
            ]}
            classNamePrefix="select"
            placeholder=""
            onChange={onSexChange}
          />
        </div>
      </InputField>
      {datas}
    </FormSection>
  )
}
