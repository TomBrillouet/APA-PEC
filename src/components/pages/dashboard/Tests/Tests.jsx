import styled from "styled-components"
import Menu from "../Menu/Menu"
import Toast from "../Toast.jsx"
import { theme } from "../../../../theme"
import { useState } from "react"
import Button from "../../../reusable/Button.jsx"
import { tests } from "../../../../datas/tests"
import ListWithButton from "../../../reusable/ListWithButton.jsx"
import {
  toastError,
  toastInfo,
  toastSuccess,
} from "../../../../datas/toastmessages"

import TestForm from "./TestForm/TestForm.jsx"

export default function Tests() {
  const [listTests, setListTests] = useState(tests)
  const [testSelected, setTestSelected] = useState()

  const handleOpenTest = (test) => {
    setTestSelected(test)
  }

  const handleChangeTest = (e, testChanged) => {
    e.preventDefault()
    const oldTest = listTests.find((test) => test.id === testChanged.id)
    if (oldTest !== testChanged) {
      setListTests((prev) =>
        prev.map((test) => (test.id === testChanged.id ? testChanged : test)),
      )
      toastSuccess("Le test a été modifié")
      setTestSelected()
      return
    }
    toastError("Aucune valeur n'a été modifiée")
  }

  const handleCancel = () => {
    setTestSelected()
    toastInfo("Le test n'a pas été modifié")
  }

  const handleTestDelete = (idToDelete) => {
    const listFiltered = listTests.filter((test) => test.id !== idToDelete)
    setListTests(listFiltered)
  }

  return (
    <TestsStyled>
      <Menu />
      {!testSelected ? (
        <div className="main-test">
          <Button label={"Ajouter un test"} />
          <ListWithButton
            buttonLabel={"Modifier"}
            secondButtonLabel={"Supprimer"}
            datas={listTests}
            onClick={handleOpenTest}
            onClickSecondButton={handleTestDelete}
            renderItem={(test) => <>{test.name}</>}
          />
        </div>
      ) : (
        <TestForm
          handleChangeTest={handleChangeTest}
          testSelected={testSelected}
          handleCancel={handleCancel}
        />
      )}
      <Toast />
    </TestsStyled>
  )
}

const TestsStyled = styled.div`
  display: flex;
  min-height: 100vh;
  .main-test {
    background-color: ${theme.colors.background};
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
