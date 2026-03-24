import Select from "react-select"
import InputField from "../../../../../../../../reusable/InputField"
import FormSection from "../../../../AddPatient/Form/FormSection"
import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient"

export default function TypeOfBilanSection({ handleChangeIsFinal, disabled }) {
  const isFinalOptions = [
    { value: true, label: "Final" },
    { value: false, label: "Intermédiaire" },
  ]
  return (
    <FormSection>
      <InputField className="field full" label={PATIENT_LABELS.bilanType}>
        <Select
          name="isFinal"
          isDisabled={disabled}
          defaultValue={isFinalOptions[1]}
          options={isFinalOptions}
          classNamePrefix="select"
          placeholder={PATIENT_LABELS.selectBilanType}
          onChange={handleChangeIsFinal}
          styles={{
            menuList: (base) => ({
              ...base,
              maxHeight: "200px",
              overflowY: "auto",
            }),
          }}
        />
      </InputField>
    </FormSection>
  )
}
