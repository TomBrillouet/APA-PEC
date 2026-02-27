import Select from "react-select"
import InputField from "../../../../../../../../reusable/InputField"
import FormSection from "../../../../AddPatient/Form/FormSection"

export default function TypeOfBilanSection({ handleChangeIsFinal, disabled }) {
  const isFinalOptions = [
    { value: true, label: "Final" },
    { value: false, label: "Intermédiaire" },
  ]
  return (
    <FormSection label={"Type de bilan"}>
      <InputField className="field full" label={"Type de bilan"}>
        <Select
          name="isFinal"
          isDisabled={disabled}
          defaultValue={isFinalOptions[1]}
          options={isFinalOptions}
          classNamePrefix="select"
          placeholder="Sélectionner le type de bilan…"
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
