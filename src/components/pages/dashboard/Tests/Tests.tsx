import styled from "styled-components"
import Button from "../../../reusable/Button.js"
import ListWithButton from "../../../reusable/ListWithButton.js"
import TestForm from "./TestForm/TestForm.js"
import { useTests } from "../../../../hooks/useTests.js"
import Loader from "../../../reusable/Loader.js"
import { LiaFileMedicalAltSolid } from "react-icons/lia"
import PageTemplate from "../PageTemplate.js"
import { theme } from "../../../../theme/index.js"
import LayoutHeader from "../Stats/Header/LayoutHeader.js"
import { TESTS_LABELS } from "../../../../constants/labels/tests.js"
import { TestType } from "../../../../types/index.js"

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
          <LayoutHeader
            title={TESTS_LABELS.title}
            subtitle={TESTS_LABELS.subtitle}
          />
          <ListWithButton>
            {listTests.map((test: TestType) => {
              return (
                <li key={test.id} className={"li-tests"}>
                  <LiaFileMedicalAltSolid />
                  <span>{test.name}</span>
                  <div>
                    <Button
                      label={TESTS_LABELS.modify}
                      onClick={() => handleOpenTest(test)}
                      version="minimalist"
                    />
                    <Button
                      label={TESTS_LABELS.delete}
                      onClick={() => handleTestDelete(test.id)}
                      version="minimalistred"
                    />
                  </div>
                </li>
              )
            })}
          </ListWithButton>
          <Button
            label={TESTS_LABELS.add}
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
  h2 {
    text-align: center;
    font-size: ${theme.fonts.size.P4};
    color: #2c5282;
    font-weight: 400;
    margin: 0 0 4px 0;
  }
  .subtitle {
    color: #64748b;
    font-size: 14px;
    margin: 0;
  }
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
