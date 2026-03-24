import Select from "react-select"
import FormSection from "./FormSection"
import InputField from "../../../../../../reusable/InputField"
import React, { useContext, useMemo } from "react"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient.jsx"

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
    <FormSection label={PATIENT_LABELS.assignedTests}>
      <InputField className="field full" label={PATIENT_LABELS.tests}>
        <Select
          isMulti
          name="tests"
          defaultValue={assignedTests()}
          options={testOptions}
          classNamePrefix="select"
          placeholder={PATIENT_LABELS.selectTests}
          onChange={onChange}
          styles={selectStyles}
        />
      </InputField>
    </FormSection>
  )
}

export default React.memo(TestsFormSection)
