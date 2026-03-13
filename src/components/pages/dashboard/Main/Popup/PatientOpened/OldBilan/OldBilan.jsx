import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import BilanDate from "../NewBilan/BilanForm/bilanSection/BilanDate.jsx"
import ResultsSection from "../../AddPatient/Form/ResultsSection.jsx"
import FinalSection from "../NewBilan/BilanForm/questionsSection/FinalSection.jsx"
import TextArea from "../../../../../../reusable/TextArea.jsx"
import InputSection from "../../../../../../reusable/InputSection.jsx"
import IntermediarySection from "../NewBilan/BilanForm/questionsSection/IntermediarySection.jsx"
import ShapeCard from "../../../../../../reusable/ShapeCard.jsx"
import { BILAN_LABELS } from "../../../../../../../enums/patient.jsx"
import Button from "../../../../../../reusable/Button.jsx"
import { BILAN_FIELDS } from "../../../../../../../datas/bilanConfig.js"
import { useForm } from "../../../../../../../hooks/useForm.jsx"
import Export from "./Export/Export.jsx"

export default function OldBilan() {
  const {
    selectedBilan,
    selectedPatient,
    updatePatients,
    handleSelectedPatient,
    handleSelectedBilan,
  } = useContext(MainContext)
  const { inputsValue, handleChange } = useForm(selectedBilan)

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
        datas={mapTextAreas(BILAN_FIELDS.initial.textareas)}
        label={"Informations médicales"}
        selectedBilan={selectedBilan}
        block
      />
    )
  }

  const handleUpdateBilan = (bilanUpdated) => {
    const patientToUpdate = {
      ...selectedPatient,
      bilans: selectedPatient.bilans.map((bilan) =>
        bilan.id === bilanUpdated.id ? bilanUpdated : bilan,
      ),
    }
    handleSelectedPatient(patientToUpdate)
    handleSelectedBilan(bilanUpdated)
    updatePatients(patientToUpdate)
  }

  return (
    <div>
      <h2 className="type-bilan">Bilan {selectedBilan?.type}</h2>
      <BilanDate bilanData={selectedBilan} disabled />
      <ShapeCard dataShape={selectedBilan} labels={BILAN_LABELS} />
      {SectionBilanType()}
      <ResultsSection
        bilanData={selectedBilan}
        disabled
        handleChange={handleChange}
        inputsValue={inputsValue}
      />
      {selectedBilan.type === "initial" && (
        <Button
          label={"Enregistrer"}
          onClick={() => handleUpdateBilan(inputsValue)}
        />
      )}
      <Export
        selectedBilan={selectedBilan}
        SectionBilanType={SectionBilanType}
        selectedPatient={selectedPatient}
      />
    </div>
  )
}
