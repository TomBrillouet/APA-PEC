import { TESTS_LABELS } from "../../../../../constants/labels/tests"
import Input from "../../../../reusable/Input"
import TextArea from "../../../../reusable/TextArea"

export default function GeneralTestSection({ inputsValue, handleChange }) {
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
