import styled from "styled-components"
import Menu from "../Menu/Menu"
import Toast from "../Toast.jsx"
import { theme } from "../../../../theme"
import Button from "../../../reusable/Button.jsx"
import ListWithButton from "../../../reusable/ListWithButton.jsx"
import TestForm from "./TestForm/TestForm.jsx"
import { useTests } from "../../../../hooks/useTests.jsx"
import Loader from "../../../reusable/Loader.jsx"

export default function Tests() {
  const {
    handleAddTest,
    handleCancel,
    handleChangeTest,
    handleOpenTest,
    handleTestDelete,
    listTests,
    testSelected,
  } = useTests()
  if (!listTests) return <Loader />
  return (
    <TestsStyled>
      <Menu />
      {!testSelected ? (
        <div className="background">
          <div className="main-test">
            <h2>Liste des tests et protocoles normés</h2>
            <ListWithButton
              buttonLabel={"Modifier"}
              secondButtonLabel={"Supprimer"}
              datas={listTests}
              onClick={handleOpenTest}
              onClickSecondButton={handleTestDelete}
              renderItem={(test) => <>{test.name}</>}
            />
            <Button
              label={"Ajouter un test"}
              onClick={handleAddTest}
              className={"add-test"}
            />
          </div>
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
  .background {
    background-color: ${theme.colors.background};
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 30px;
    .main-test {
      background-color: ${theme.colors.white};
      display: flex;
      flex: 1;
      padding: 30px;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 8px;
      .add-test {
        align-self: flex-end;
      }
    }
  }
`
