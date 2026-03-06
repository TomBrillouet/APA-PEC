import styled from "styled-components"
import Menu from "../Menu/Menu"
import Toast from "../Toast.jsx"
import { theme } from "../../../../theme"
import Button from "../../../reusable/Button.jsx"
import ListWithButton from "../../../reusable/ListWithButton.jsx"
import TestForm from "./TestForm/TestForm.jsx"
import { useTests } from "../../../../hooks/useTests.jsx"
import Loader from "../../../reusable/Loader.jsx"
import { LiaFileMedicalAltSolid } from "react-icons/lia"

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
  if (!listTests)
    return (
      <TestsStyled>
        <Menu />
        <Loader />
      </TestsStyled>
    )
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
              icon={<LiaFileMedicalAltSolid />}
              className={"li-tests"}
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
      .li-tests {
        font-size: 20px;
        svg {
          font-size: 26px;
        }
      }
      .add-test {
        align-self: flex-end;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .background {
      padding: 10px;
      .main-test {
        text-align: center;
        align-items: center;
        padding: 10px;
        ul {
          display: flex;
          flex-direction: column;
          gap: 2em;
          li {
            flex-direction: column;
            gap: 2px;
            button {
              margin-left: 10px;
              padding: 15px;
            }
          }
        }
      }
    }
  }
`
