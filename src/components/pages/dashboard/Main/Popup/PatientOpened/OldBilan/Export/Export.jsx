import styled from "styled-components"
import Button from "../../../../../../../reusable/Button.jsx"
import { useContext, useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { createGlobalStyle } from "styled-components"
import { MainContext } from "../../../../../../../../context/MainContext.jsx"
import ExportHeader from "./Header/ExportHeader.jsx"
import BilanSection from "./sections/BilanSection.jsx"
import ProSection from "./sections/ProSection.jsx"
import FooterSection from "./sections/FooterSection.jsx"
import { PATIENT_LABELS } from "../../../../../../../../constants/labels/patient.jsx"

const PrintStyles = createGlobalStyle`
  @media print {
.no-print { display: none;  }
.print-only { 
  background-color: #f9f7f4;
  height: 200vh;
  overflow-y: hidden;
  line-height: normal;
  position: relative;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    background-color: #efe8e1;
    padding: 15px;
  h1{
    color: #3e5c6f;
    font-size: 32px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    margin:0
  }
  span {
    color: #d07a5c;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
  }
}
  main {
    padding: 5px 50px;

      h2{
        margin-bottom:5px;
        color: #3e5c6f;
        font-size: 16px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      b{
        margin-top: 5px;
      }

      .test-name{
        color: #3e5c6f
      }

      p,ul,li,b, span{
        font-size: 12px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    
    section.pro{
      display: flex;
      flex-direction: column;
    }
    hr {
      background-color: #d07a5c;
      height: 1px;
      border: none;
    }
    .center {
      text-align: center;
    }
    .tests {
      display: flex;
      flex-direction: column;
      gap: 15px;
    .test-container {
      display: flex;
      border: solid #3e5c6f 1px;
      border-radius: 5px;
      min-height: 100px;
      background-color: #efe8e1;
      .test-number {
        border-right: solid #3e5c6f 1px;
        min-height: 100%;
        padding: 0 8px 0 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3e5c6f
      }
      .test-infos {
        display:flex;
        flex:1;
        flex-direction:column;
        justify-content: space-between;
        padding:5px;
        
        .results{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          column-gap: 50px;
        }
      }
    }}
    .footer {
      position: absolute;
      bottom: 0;
    }
    .num1 {
      position: absolute;
      bottom: calc(50% + 10px);
      right: 10px;
      font-size: 16px;
    }
    .num2 {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 16px;
    }
  }
  }}
`

export default function Export({ selectedBilan, selectedPatient }) {
  const ref = useRef()
  const print = useReactToPrint({ contentRef: ref })
  const { pro } = useContext(MainContext)
  return (
    <>
      <PrintStyles />
      <ExportStyled>
        <Button
          label={PATIENT_LABELS.downloadBilan}
          version="submit"
          onClick={print}
          className="no-print"
        />
        <div className="print-only" ref={ref}>
          <ExportHeader className={"header"} selectedBilan={selectedBilan} />
          <main>
            <span className="num1">1</span>
            <span className="num2">2</span>
            <ProSection className={"pro"} pro={pro} />
            <hr />
            <BilanSection
              pro={pro}
              selectedBilan={selectedBilan}
              selectedPatient={selectedPatient}
            />
            <FooterSection className={"footer"} pro={pro} />
          </main>
        </div>
      </ExportStyled>
    </>
  )
}

const ExportStyled = styled.div`
  display: contents;
  .print-only {
    display: none;
  }
`
