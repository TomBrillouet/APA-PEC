import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import BilanDate from "../NewBilan/BilanForm/bilanSection/BilanDate.jsx"
import ResultsSection from "../../AddPatient/Form/ResultsSection.jsx"
import ShapeCard from "../../../../../../reusable/ShapeCard.jsx"
import Button from "../../../../../../reusable/Button.jsx"
import { useForm } from "../../../../../../../hooks/useForm.jsx"
import Export from "./Export/Export.jsx"
import TypeBilanSection from "../NewBilan/BilanForm/TextAreasSection/TypeBilanSection.jsx"
import { PATIENT_LABELS } from "../../../../../../../constants/labels/patient.jsx"

export default function OldBilan() {
  const {
    selectedBilan,
    selectedPatient,
    updatePatients,
    handleSelectedPatient,
    handleSelectedBilan,
  } = useContext(MainContext)
  const { inputsValue, handleChange } = useForm(selectedBilan)

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
