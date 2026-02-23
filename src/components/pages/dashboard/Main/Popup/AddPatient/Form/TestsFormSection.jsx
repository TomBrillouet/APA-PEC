import { tests } from "../../../../../../../datas/tests"
import Select from "react-select"
import FormSection from "./FormSection"
import InputField from "../../../../../../reusable/InputField"

export default function TestsFormSection({ onChange, defaultValue }) {
  const testOptions = tests.map((test) => ({
    value: test.name,
    label: test.name,
  }))
  return (
    <FormSection label={"Tests assignés"}>
      <InputField className="field full" label={"Tests"}>
        <Select
          isMulti
          name="tests"
          defaultValue={defaultValue}
          options={testOptions}
          classNamePrefix="select"
          placeholder="Sélectionner des tests…"
          onChange={onChange}
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
