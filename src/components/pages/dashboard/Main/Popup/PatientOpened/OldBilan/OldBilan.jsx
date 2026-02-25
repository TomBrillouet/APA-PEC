import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import TypeOfBilanSection from "../NewBilan/BilanForm/bilanSection/TypeOfBilanSection.jsx"
import BilanDate from "../NewBilan/BilanForm/bilanSection/BilanDate.jsx"
import PreviousShapeValues from "../NewBilan/BilanForm/patientSection/PreviousShapeValues.jsx"
import ResultsSection from "../../AddPatient/Form/ResultsSection.jsx"
import styled from "styled-components"
import FinalSection from "../NewBilan/BilanForm/questionsSection/FinalSection.jsx"
import { medicArea } from "../../AddPatient/config/medicArea.jsx"
import TextArea from "../../../../../../reusable/TextArea.jsx"
import InputSection from "../../../../../../reusable/InputSection.jsx"
import IntermediarySection from "../NewBilan/BilanForm/questionsSection/IntermediarySection.jsx"
import Button from "../../../../../../reusable/Button.jsx"

export default function OldBilan() {
  const { selectedBilan, selectedPatient } = useContext(MainContext)
  console.log(selectedBilan)

  const mapTextAreas = (array) =>
    array.map((textarea) => {
      return (
        <TextArea
          name={textarea.name}
          label={textarea.label}
          rows={3}
          disabled
          value={
            selectedPatient[textarea.name] || selectedBilan[textarea.name] || ""
          }
          key={textarea.name}
        />
      )
    })

  const SectionBilanType = () => {
    if (selectedBilan.type === "final")
      return <FinalSection mapTextAreas={mapTextAreas} />
    if (selectedBilan.type === "intermediaire")
      return <IntermediarySection mapTextAreas={mapTextAreas} />
    return (
      <InputSection
        datas={mapTextAreas(medicArea)}
        label={"Informations médicales"}
        selectedBilan={selectedBilan}
      />
    )
  }

  return (
    <OldBilanStyled>
      <h2 className="type-bilan">Bilan {selectedBilan?.type}</h2>
      <BilanDate bilanData={selectedBilan} disabled />
      <PreviousShapeValues selectedPatient={selectedPatient} />
      {SectionBilanType()}
      <ResultsSection bilanData={selectedBilan} disabled />
      <Button
        label={"Télécharger le bilan"}
        version="submit"
        onClick={() => {}}
      />
    </OldBilanStyled>
  )
}

const OldBilanStyled = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px;
`
