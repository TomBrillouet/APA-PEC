import { useEffect, useState } from "react"
import { toastError, toastInfo, toastSuccess } from "../datas/toastmessages"
import { EMPTY_TEST } from "../enums/test"
import { useAuth } from "../context/AuthContext.jsx"
import { initialiseListTests } from "../components/pages/dashboard/Main/helpers/initialiseUserSession.js"
import { syncBothListTests } from "../api/tests.js"

export const useTests = () => {
  const { currentUser } = useAuth()
  const userId = currentUser?.uid
  const [listTests, setListTests] = useState()
  const [testSelected, setTestSelected] = useState()

  useEffect(() => {
    if (!userId) return
    initialiseListTests(userId, setListTests)
  }, [userId])

  const handleOpenTest = (test) => {
    setTestSelected(test)
  }

  const handleChangeTest = (e, testChanged) => {
    e.preventDefault()
    const oldTest = listTests.find((test) => test.id === testChanged.id)
    if (oldTest !== testChanged) {
      const newList = listTests.map((test) =>
        test.id === testChanged.id ? testChanged : test,
      )
      setListTests(newList)
      syncBothListTests(userId, newList)
      if (oldTest.name === "") {
        toastSuccess("Le test a été ajouté")
        setTestSelected()
        return
      }
      toastSuccess("Le test a été modifié")
      setTestSelected()
      return
    }
    toastError("Aucune valeur n'a été modifiée")
  }

  const handleCancel = () => {
    if (testSelected.name === "") {
      const listFiltered = listTests.filter(
        (test) => test.name !== testSelected.name,
      )
      setListTests(listFiltered)
      syncBothListTests(userId, listFiltered)
      setTestSelected()
      toastInfo("Le test n'a pas été créé")
      return
    }
    setTestSelected()
    toastInfo("Le test n'a pas été modifié")
  }

  const handleTestDelete = (idToDelete) => {
    const listFiltered = listTests.filter((test) => test.id !== idToDelete)
    setListTests(listFiltered)
    syncBothListTests(userId, listFiltered)
    toastInfo("Le test a été supprimé")
  }

  const handleAddTest = () => {
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
