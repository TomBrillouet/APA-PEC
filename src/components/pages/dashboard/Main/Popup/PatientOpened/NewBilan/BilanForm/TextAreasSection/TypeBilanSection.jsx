import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient"
import { BILAN_FIELDS } from "../../../../../../../../../datas/bilanConfig"
import InputSection from "../../../../../../../../reusable/InputSection"
import TextArea from "../../../../../../../../reusable/TextArea"

export default function TypeBilanSection({
  selectedPatient,
  selectedBilan,
  onChange,
  bilanData,
  type,
}) {
  const bilanFields = BILAN_FIELDS[type].textareas.map((textarea) => (
    <TextArea
      name={textarea.name}
      label={textarea.label}
      rows={3}
      onChange={onChange}
      disabled={selectedBilan}
      value={
        selectedBilan
          ? selectedPatient[textarea.name] || selectedBilan[textarea.name] || ""
          : bilanData[textarea.name]
      }
      key={textarea.name}
    />
  ))

  const initialMedicInfos = BILAN_FIELDS.initial.textareas.map((textarea) => (
    <TextArea
      name={textarea.name}
      label={textarea.label}
      rows={3}
      disabled
      value={selectedPatient[textarea.name]}
      key={textarea.name}
    />
  ))

  return (
    <>
      <InputSection
        datas={initialMedicInfos}
        label={PATIENT_LABELS.initialInfos}
        block
      />
      {type !== "initial" && (
        <InputSection
          datas={bilanFields}
          label={PATIENT_LABELS.developmentPatient}
          block
        />
      )}
    </>
  )
}
