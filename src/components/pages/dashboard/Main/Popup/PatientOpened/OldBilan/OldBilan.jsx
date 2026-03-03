import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import BilanDate from "../NewBilan/BilanForm/bilanSection/BilanDate.jsx"
import ResultsSection from "../../AddPatient/Form/ResultsSection.jsx"
import FinalSection from "../NewBilan/BilanForm/questionsSection/FinalSection.jsx"
import { medicArea } from "../../AddPatient/config/medicArea.jsx"
import TextArea from "../../../../../../reusable/TextArea.jsx"
import InputSection from "../../../../../../reusable/InputSection.jsx"
import IntermediarySection from "../NewBilan/BilanForm/questionsSection/IntermediarySection.jsx"
import Export from "./Export.jsx"
import ShapeCard from "../../../../../../reusable/ShapeCard.jsx"
import { BILAN_LABELS } from "../../../../../../../enums/patient.jsx"

export default function OldBilan() {
  const { selectedBilan, selectedPatient } = useContext(MainContext)

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
      return <FinalSection mapTextAreas={mapTextAreas} block />
    if (selectedBilan.type === "intermediaire")
      return <IntermediarySection mapTextAreas={mapTextAreas} block />
    return (
      <InputSection
        datas={mapTextAreas(medicArea)}
        label={"Informations médicales"}
        selectedBilan={selectedBilan}
        block
      />
    )
  }

  return (
    <div>
      <h2 className="type-bilan">Bilan {selectedBilan?.type}</h2>
      <BilanDate bilanData={selectedBilan} disabled />
      <ShapeCard dataShape={selectedBilan} labels={BILAN_LABELS} />
      {SectionBilanType()}
      <ResultsSection bilanData={selectedBilan} disabled />
      <Export
        selectedBilan={selectedBilan}
        SectionBilanType={SectionBilanType}
      />
    </div>
  )
}
