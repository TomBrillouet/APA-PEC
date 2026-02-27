import styled from "styled-components"
import Button from "../../../../../../reusable/Button"
import BilanDate from "../NewBilan/BilanForm/bilanSection/BilanDate"
import ResultsSection from "../../AddPatient/Form/ResultsSection"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { createGlobalStyle } from "styled-components"
import Header from "../../../../Header/Header.jsx"
import ShapeCard from "../../../../../../reusable/ShapeCard.jsx"
import { BILAN_LABELS } from "../../../../../../../enums/patient.jsx"

const PrintStyles = createGlobalStyle`
  @media print {
    .no-print { display: none;  }
    .print-only { display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px; }
  }
`

export default function Export({ selectedBilan, SectionBilanType }) {
  const ref = useRef()
  const print = useReactToPrint({ contentRef: ref })
  return (
    <>
      <PrintStyles />
      <ExportStyled>
        <Button
          label={"Télécharger le bilan"}
          version="submit"
          onClick={print}
          className="no-print"
        />
        <div className="print-only" ref={ref}>
          <Header print />
          <h2 className="type-bilan">Bilan {selectedBilan?.type}</h2>
          <BilanDate bilanData={selectedBilan} disabled />
          <ShapeCard dataShape={selectedBilan} labels={BILAN_LABELS} />
          {SectionBilanType()}
          <ResultsSection print bilanData={selectedBilan} disabled />
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
