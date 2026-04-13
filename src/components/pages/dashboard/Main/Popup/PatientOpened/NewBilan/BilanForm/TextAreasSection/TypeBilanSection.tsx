import React from "react"
import { PATIENT_LABELS } from "../../../../../../../../../constants/labels/patient"
import { BILAN_FIELDS } from "../../../../../../../../../datas/bilanConfig"
import { BilanType, PatientType } from "../../../../../../../../../types"
import InputSection from "../../../../../../../../reusable/InputSection"
import TextArea from "../../../../../../../../reusable/TextArea"

type TypeBilanSectionType = {
  selectedPatient: PatientType
  selectedBilan?: BilanType
  onChange?: (_e: React.ChangeEvent<HTMLTextAreaElement>) => void
  bilanData?: BilanType
  type: BilanType["type"]
}

export default function TypeBilanSection({
  selectedPatient,
  selectedBilan,
  onChange,
  bilanData,
  type,
}: TypeBilanSectionType) {
  const bilanFields =
    type === "initial"
      ? []
      : BILAN_FIELDS[type].textareas.map((textarea) => (
          <TextArea
            name={textarea.name}
            label={textarea.label}
            rows={3}
            onChange={onChange}
            disabled={!!selectedBilan}
            value={
              selectedBilan
                ? `${selectedBilan[textarea.name] ?? ""}`
                : `${bilanData?.[textarea.name] ?? ""}`
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
      value={`${selectedPatient[textarea.name]}`}
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
