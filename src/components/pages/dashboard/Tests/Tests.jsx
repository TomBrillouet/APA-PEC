import styled from "styled-components"
import Button from "../../../reusable/Button.jsx"
import ListWithButton from "../../../reusable/ListWithButton.jsx"
import TestForm from "./TestForm/TestForm.jsx"
import { useTests } from "../../../../hooks/useTests.jsx"
import Loader from "../../../reusable/Loader.jsx"
import { LiaFileMedicalAltSolid } from "react-icons/lia"
import PageTemplate from "../PageTemplate.jsx"

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
      <PageTemplate>
        <Loader />
      </PageTemplate>
    )
  return (
    <PageTemplate>
      {!testSelected ? (
        <TestsStyled>
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
        </TestsStyled>
      ) : (
        <TestForm
          handleChangeTest={handleChangeTest}
          testSelected={testSelected}
          handleCancel={handleCancel}
        />
      )}
    </PageTemplate>
  )
}

const TestsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  .li-tests {
    font-size: 20px;
    svg {
      font-size: 26px;
    }
  }

  @media screen and (max-width: 768px) {
    align-items: center;
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
    .add-test {
      align-self: center;
    }
  }
`
