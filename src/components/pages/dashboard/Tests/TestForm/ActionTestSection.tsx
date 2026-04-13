import React from "react"
import { TESTS_LABELS } from "../../../../../constants/labels/tests"
import Button from "../../../../reusable/Button"

type ActionTestSectionType = {
  handleAddNewResult: (_e: React.MouseEvent<HTMLButtonElement>) => void
  handleCancel: () => void
}

export default function ActionTestSection({
  handleAddNewResult,
  handleCancel,
}: ActionTestSectionType) {
  return (
    <>
      <Button
        label={TESTS_LABELS.addResult}
        onClick={(e) => handleAddNewResult(e)}
        version="cancel"
      />
      <Button label={TESTS_LABELS.submit} version="submit" type="submit" />
      <Button
        label={TESTS_LABELS.cancel}
        onClick={handleCancel}
        version={"red"}
      />
    </>
  )
}
