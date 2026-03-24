import Select from "react-select"
import FormSection from "./FormSection"
import InputField from "../../../../../../reusable/InputField"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient"

export default function IdentityFormSection({ onChange, datas }) {
  return (
    <FormSection label={PATIENT_LABELS.identity}>
      <InputField className="field" label={PATIENT_LABELS.sex}>
        <Select
          required
          name="sex"
          options={[
            { value: "man", label: PATIENT_LABELS.man },
            { value: "woman", label: PATIENT_LABELS.woman },
          ]}
          classNamePrefix="select"
          onChange={onChange}
        />
      </InputField>
      {datas}
    </FormSection>
  )
}
