import Select, {
  ActionMeta,
  CSSObjectWithLabel,
  GroupBase,
  MultiValue,
  StylesConfig,
} from "react-select"
import FormSection from "./FormSection"
import InputField from "../../../../../../reusable/InputField"
import React, { useContext, useMemo } from "react"
import { MainContext } from "../../../../../../../context/MainContext.js"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient.js"
import { PatientType, TestType } from "../../../../../../../types"

type TestOptionType = { label: string; value: string }

type TestsFormSectionType = {
  onChange: (
    _selectedOptions: MultiValue<TestOptionType>,
    _actionMeta: ActionMeta<TestOptionType>,
  ) => void
  selectedPatient?: PatientType
}

const selectStyles: StylesConfig<
  TestOptionType,
  true,
  GroupBase<TestOptionType>
> = {
  menuList: (base: CSSObjectWithLabel) => ({
    ...base,
    maxHeight: "200px",
    overflowY: "auto",
  }),
}

function TestsFormSection({ onChange, selectedPatient }: TestsFormSectionType) {
  const { listTests } = useContext(MainContext)

  const testOptions = useMemo(
    () =>
      listTests.map((test) => ({
        value: test.id,
        label: test.name,
      })),
    [listTests],
  )

  const assignedTests = () => {
    if (!selectedPatient) return []
    return selectedPatient.bilans[0].tests
      .filter((test) => listTests.some((t) => t.id === test.id))
      .map((test: TestType) => {
        const testName = listTests.find((t) => t.id === test.id)!.name
        return { label: testName, value: test.id }
      })
  }

  return (
    <FormSection label={PATIENT_LABELS.assignedTests}>
      <InputField className="field full">
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
