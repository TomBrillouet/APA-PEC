import styled from "styled-components"
import { tests } from "../../../../../../datas/tests"
import TitleSection from "../../../../../reusable/TitleSection"
import Select from "react-select"
import FormSection from "./FormSection"

export default function TestsFormSection({ onChange }) {
  const testOptions = tests.map((test) => ({
    value: test.name,
    label: test.name,
  }))
  return (
    <FormSection label={"Tests assignés"}>
      <div className="field full">
        <label>Tests</label>
        <Select
          isMulti
          name="tests"
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
      </div>
    </FormSection>
  )
}
