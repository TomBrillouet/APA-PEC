import React from "react"
import { TESTS_LABELS } from "../../../../../constants/labels/tests"
import { TestType } from "../../../../../types"
import Input from "../../../../reusable/Input"
import TextArea from "../../../../reusable/TextArea"

type GeneralTestSectionType = {
  inputsValue: TestType
  handleChange: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
}

export default function GeneralTestSection({
  inputsValue,
  handleChange,
}: GeneralTestSectionType) {
  return (
    <>
      <Input
        name={"name"}
        label={TESTS_LABELS.testName}
        type={"text"}
        value={inputsValue.name}
        onChange={handleChange}
        isRequired
      />
      <TextArea
        name={"description"}
        label={TESTS_LABELS.description}
        value={inputsValue.description}
        onChange={handleChange}
        isRequired
      />
    </>
  )
}
