import Select from "react-select"
import FormSection from "./FormSection"
import InputField from "../../../../../../reusable/InputField"
import React, { useContext, useMemo } from "react"
import { MainContext } from "../../../../../../../context/MainContext.jsx"

const selectStyles = {
  menuList: (base) => ({
    ...base,
    maxHeight: "200px",
    overflowY: "auto",
  }),
}

function TestsFormSection({ onChange, selectedPatient }) {
  const { listTests } = useContext(MainContext)

  const testOptions = useMemo(
    () =>
      listTests?.map((test) => ({
        value: test.name,
        label: test.name,
      })),
    [listTests],
  )
  const assignedTests = () => {
    return selectedPatient?.bilans[0].tests.map((test, index) => {
      if (index < selectedPatient.bilans[0].tests.length) {
        return { label: test.name, value: test.name }
      }
    })
  }

  return (
    <FormSection label={"Tests assignés"}>
      <InputField className="field full" label={"Tests"}>
        <Select
          isMulti
          name="tests"
          defaultValue={assignedTests()}
          options={testOptions}
          classNamePrefix="select"
          placeholder="Sélectionner des tests…"
          onChange={onChange}
          styles={selectStyles}
        />
      </InputField>
    </FormSection>
  )
}

export default React.memo(TestsFormSection)
