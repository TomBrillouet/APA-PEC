import Select, { SingleValue } from "react-select"
import InputField from "../../../../../../../../reusable/InputField"
import FormSection from "../../../../AddPatient/Form/FormSection"
import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient"

type TypeOfBilanSectiontType = {
  handleChangeIsFinal: (
    _option: SingleValue<{
      value: boolean
      label: string
    }>,
  ) => void
}

export default function TypeOfBilanSection({
  handleChangeIsFinal,
}: TypeOfBilanSectiontType) {
  const isFinalOptions = [
    { value: true, label: "Final" },
    { value: false, label: "Intermédiaire" },
  ]
  return (
    <FormSection label="Type de Bilan" block>
      <InputField className="field full">
        <Select
          name="isFinal"
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
