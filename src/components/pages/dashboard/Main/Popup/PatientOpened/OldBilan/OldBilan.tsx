import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import BilanDate from "../NewBilan/BilanForm/bilanSection/BilanDate.js"
import ResultsSection from "../../AddPatient/Form/ResultsSection.js"
import ShapeCard from "../../../../../../reusable/ShapeCard.js"
import Button from "../../../../../../reusable/Button.js"
import { useForm } from "../../../../../../../hooks/useForm.js"
import Export from "./Export/Export.js"
import TypeBilanSection from "../NewBilan/BilanForm/TextAreasSection/TypeBilanSection.js"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient.js"
import { BilanType } from "../../../../../../../types"

export default function OldBilan({
  selectedBilan,
}: {
  selectedBilan: BilanType
}) {
  const {
    selectedPatient,
    updatePatients,
    handleSelectedPatient,
    handleSelectedBilan,
  } = useContext(MainContext)
  const { inputsValue, handleChange } = useForm(selectedBilan)

  const handleUpdateBilan = (bilanUpdated: BilanType) => {
    if (!selectedPatient) return
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
  if (!selectedBilan || !selectedPatient) return null
  return (
    <div>
      <h2 className="type-bilan">
        {PATIENT_LABELS.bilan} {selectedBilan.type}
      </h2>
      <BilanDate bilanData={selectedBilan} disabled />
      <ShapeCard
        dataShape={selectedBilan}
        labels={PATIENT_LABELS.BILAN_LABELS}
      />
      <TypeBilanSection
        type={selectedBilan.type}
        selectedBilan={selectedBilan}
        selectedPatient={selectedPatient}
      />
      <ResultsSection
        bilanData={selectedBilan}
        disabled
        handleChange={handleChange}
        inputsValue={inputsValue}
      />
      {selectedBilan.type === "initial" && (
        <Button
          label={PATIENT_LABELS.submit}
          onClick={() => handleUpdateBilan(inputsValue)}
        />
      )}
      <Export selectedBilan={selectedBilan} selectedPatient={selectedPatient} />
    </div>
  )
}
