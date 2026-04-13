import React, { useEffect, useState } from "react"
import { toastError, toastInfo, toastSuccess } from "../datas/toastmessages"
import { EMPTY_TEST } from "../constants/models/test"
import { useAuth } from "../context/AuthContext.js"
import { initialiseListTests } from "../components/pages/dashboard/Main/helpers/initialiseUserSession.js"
import { syncBothListTests } from "../api/tests.js"
import { TOAST_LABELS } from "../constants/labels/toasts.js"
import { ListTestsType, TestType } from "../types"

export const useTests = () => {
  const { currentUser } = useAuth()
  const userId = currentUser?.uid
  const [listTests, setListTests] = useState<ListTestsType>([])
  const [testSelected, setTestSelected] = useState<TestType>()

  useEffect(() => {
    if (!userId) return
    initialiseListTests(userId, setListTests)
  }, [userId])

  const handleOpenTest = (test: TestType) => {
    setTestSelected(test)
  }

  const handleChangeTest = (
    e: React.SubmitEvent<HTMLFormElement>,
    testChanged: TestType,
  ) => {
    if (!userId) return
    e.preventDefault()
    const oldTest = listTests?.find((test) => test.id === testChanged.id)
    if (oldTest !== testChanged) {
      const newList = listTests?.map((test) =>
        test.id === testChanged.id ? testChanged : test,
      )
      setListTests(newList)
      syncBothListTests(userId, newList)
      if (oldTest?.name === "") {
        toastSuccess(`${TOAST_LABELS.testAdded}`)
        setTestSelected(undefined)
        return
      }
      toastSuccess(`${TOAST_LABELS.testModified}`)
      setTestSelected(undefined)
      return
    }
    toastError(`${TOAST_LABELS.notModified}`)
  }

  const handleCancel = () => {
    if (!userId) return
    if (testSelected?.name === "") {
      const listFiltered = listTests?.filter(
        (test) => test.name !== testSelected.name,
      )
      setListTests(listFiltered)
      syncBothListTests(userId, listFiltered)
      setTestSelected(undefined)
      toastInfo(`${TOAST_LABELS.testNotCreated}`)
      return
    }
    setTestSelected(undefined)
    toastInfo(`${TOAST_LABELS.testNotModified}`)
  }

  const handleTestDelete = (idToDelete: string) => {
    if (!userId) return
    const listFiltered = listTests?.filter((test) => test.id !== idToDelete)
    setListTests(listFiltered)
    syncBothListTests(userId, listFiltered)
    toastInfo(`${TOAST_LABELS.testDeleted}`)
  }

  const handleAddTest = () => {
    if (!userId) return
    const newTest = { ...EMPTY_TEST, id: crypto.randomUUID() }
    const listUpdated = [...(listTests ?? []), newTest]
    setTestSelected(newTest)
    setListTests(listUpdated)
    syncBothListTests(userId, listUpdated)
  }
  return {
    listTests,
    testSelected,
    handleOpenTest,
    handleChangeTest,
    handleCancel,
    handleTestDelete,
    handleAddTest,
  }
}
